import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from'@angular/forms';
import{PatientService}from'../../patient.service'
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  
  constructor(private patients:PatientService) { }
addpatient=new FormGroup({
name:new FormControl(''),
mobile: new FormControl(''),
email :new FormControl('') ,
address:new FormControl(''),
  

});
message:boolean=false;
  ngOnInit(): void {
  }
SaveData(){
  console.log(this.addpatient.value); 
 this.patients.savePatientData(this.addpatient.value).subscribe((result)=>{
    //console.log(result)
    this.message=true;
    this.addpatient.reset({});
  });

}
removemessage(){
  this.message=false;
}
}
