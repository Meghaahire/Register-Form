import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {component:HomeComponent,path:"home"},
  {component:RegistrationComponent,path:"registration"},
  {component:ProfileComponent,path:"profile"},
  {component:NotfoundComponent,path:"**"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterOutlet],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }


