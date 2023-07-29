import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BooknowComponent } from './pages/booknow/booknow.component';

import { FinddoctorComponent } from './pages/finddoctor/finddoctor.component';
import { FirstComponent } from './pages/first/first.component';
import { HomeComponent } from './pages/home/home.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { PatientComponent } from './pages/patient/patient.component';
import { SecondComponent } from './pages/second/second.component';
import { Service1Component } from './pages/service1/service1.component';
import { Service2Component } from './pages/service2/service2.component';
import { ServicesComponent } from './pages/services/services.component';
import { ThirdComponent } from './pages/third/third.component';
import { TourComponent } from './pages/tour/tour.component';
import { Service3Component } from './pages/service3/service3.component';
import { PharmacyComponent } from './pages/pharmacy/pharmacy.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Find A Doctor',component:FinddoctorComponent},
  {path:'About us',component:AboutusComponent},
  {path:'Take A Tour',component:TourComponent},
  {path:'Our Team',component:OurteamComponent},
  {path:'Book Now',component:BooknowComponent},

  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent},
  {path:'patient',component:PatientComponent},
  {path:'service1',component:Service1Component},
  {path:'service2',component:Service2Component},
  {path:'service3',component:Service3Component},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
