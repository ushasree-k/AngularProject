import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentregisterComponent } from './Register/studentregister/studentregister.component';
import { StaffregisterComponent } from './Register/staffregister/staffregister.component';
import { RegisterComponent } from './Register/register/register.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './Category/delete-category/delete-category.component';
import { CategoryComponent } from './Category/category/category.component';
import { MatTableModule } from '@angular/material';
import { VolunteertrackingComponent } from './volunteertracking/volunteertracking.component';
import { HeaderComponent } from './header/header.component';
import { VoluteerregisterComponent } from './voluteerregister/voluteerregister.component'; 
import { HttpClientModule } from '@angular/common/http';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    StudentregisterComponent,
    StaffregisterComponent,
    RegisterComponent,

    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    CategoryComponent,
    VolunteertrackingComponent,
    HeaderComponent,
    VoluteerregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
