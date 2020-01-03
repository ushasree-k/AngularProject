import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaffregisterComponent } from './Register/staffregister/staffregister.component';
import { StudentregisterComponent } from './Register/studentregister/studentregister.component';
import { RegisterComponent } from './Register/register/register.component';
import { CategoryComponent } from './Category/category/category.component';
import { VolunteertrackingComponent } from './volunteertracking/volunteertracking.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'staffregister', component: StaffregisterComponent },
  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'volunteer', component: VolunteertrackingComponent },
  { path: 'profile', component:MyprofileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
