#include "DFRobot_BloodOxygen_S.h"
#include <DFRobot_Heartrate.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_Sensor.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "software ";
const char* password =  "123456789";

char jsonOutput[128];

#define I2C_COMMUNICATION  //use I2C for communication, but use the serial port for communication if the line of codes were masked

#ifdef  I2C_COMMUNICATION
#define I2C_ADDRESS    0x57
  DFRobot_BloodOxygen_S_I2C MAX30102(&Wire ,I2C_ADDRESS);
#else

#if defined(ESP32)
SoftwareSerial mySerial(21, 22);
DFRobot_BloodOxygen_S_SoftWareUart MAX30102(&mySerial, 115200);
#else
DFRobot_BloodOxygen_S_HardWareUart MAX30102(&Serial1, 115200); 
#endif
#endif

Adafruit_MPU6050 mpu;
Adafruit_SSD1306 display = Adafruit_SSD1306(128, 64, &Wire);

void setup()
{
  Serial.begin(115200);

  WiFi.begin(ssid, password);

  int attempts = 0;
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
    attempts++;
    if(attempts > 10){
      ESP.restart();
    }
  }
 
  Serial.println("Connected to the WiFi network");

  while (false == MAX30102.begin())
  {
    Serial.println("init fail!");
    delay(1000);
  }
  Serial.println("init success!");
  Serial.println("start measuring...");
  MAX30102.sensorStartCollect();

  if (!mpu.begin()) {
    Serial.println("Sensor init failed");
    while (1)
      yield();
  }
  Serial.println("Found a MPU-6050 sensor");

  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { // Address 0x3C for 128x64
    Serial.println(F("SSD1306 allocation failed"));
    for (;;)
      ; // Don't proceed, loop forever
  }
  display.display();
  delay(5000); // Pause for 2 seconds
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setRotation(0);  
}

void loop()
{
  MAX30102.getHeartbeatSPO2();
  int spo2 = MAX30102._sHeartbeatSPO2.SPO2;
  int hr = MAX30102._sHeartbeatSPO2.Heartbeat;
  int temperature = MAX30102.getTemperature_C();
  Serial.println(String(spo2));
  Serial.println(String(hr));
  Serial.println(String(temperature));

  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);
  float q=fabsf(g.gyro.x);
  float r=fabsf(g.gyro.y);
  float t=fabsf(g.gyro.z);
  Serial.println(String(q));
  Serial.println(String(r));
  Serial.println(String(r));
  display.clearDisplay();
  display.setCursor(0, 0);


  if((WiFi.status() == WL_CONNECTED)){
    if(q >= 4.0 || r >= 4.0 || t >= 4.0){
      if(hr > 120){
        if(spo2 < 95){
          if(temperature > 37){
            HTTPClient client;
            client.begin("https://sensor-readings.onrender.com/new-readings");
            //client.begin("https://patientsdata.onrender.com/");
            client.addHeader("Content-Type", "application/json");

            const size_t CAPACITY = JSON_OBJECT_SIZE(50);
            StaticJsonDocument<CAPACITY> doc;

            JsonObject object = doc.to<JsonObject>();

            object["temprature"] = String(spo2);
            object["humidity"] = String(q);

            serializeJson(doc, jsonOutput);

            Serial.println(String(jsonOutput));

            int httpCode = client.POST(String(jsonOutput));

            if(httpCode > 0) {
              String payLoad = client.getString();
              Serial.println("\nStatusCode:" + String(httpCode));
              Serial.println(payLoad);
              client.end();
            }
            else{
              Serial.println("\nStatusCode:" + String(httpCode));
              Serial.println("Error on HTTP request");
            }

            //The sensor updates the data every 4 seconds
            delay(10000);
            //Serial.println("stop measuring...");
            //MAX30102.sensorEndCollect();
  
            exit(0);
          }
        }
      }
    }
  }
}