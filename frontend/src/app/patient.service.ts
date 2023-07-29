import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
url=' http://localhost:3000/usersData'
  constructor(private http:HttpClient) { }
  
// getAllpatients(){
    //return this.http.get(this.url);
//  }
  savePatientData(data:any){
//console.log(data);
return this.http.post(this.url,data); 
  }
}
 