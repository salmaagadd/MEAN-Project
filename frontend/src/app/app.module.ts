import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavComponent } from './sharepage/mynav/mynav.component';
import { MyfootComponent } from './sharepage/myfoot/myfoot.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { TourComponent } from './pages/tour/tour.component';
import { FinddoctorComponent } from './pages/finddoctor/finddoctor.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { BooknowComponent } from './pages/booknow/booknow.component';

import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';
import { PatientComponent } from './pages/patient/patient.component';
import { Service1Component } from './pages/service1/service1.component';
import { Service2Component } from './pages/service2/service2.component';
import { Service3Component } from './pages/service3/service3.component';
import { PharmacyComponent } from './pages/pharmacy/pharmacy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import{ReactiveFormsModule}from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    MyfootComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    TourComponent,
    FinddoctorComponent,
    OurteamComponent,
    BooknowComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PatientComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    PharmacyComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
