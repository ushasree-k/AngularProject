import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationModel } from '../Model/registration.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  profileForm: FormGroup;
  titles: string[];
  statuses: string[];
  currentUser:RegistrationModel;
  
  constructor(private formBuilder: FormBuilder) {
    this.titles = "Principal,AP,Branch Administrator".split(',');
    this.statuses=['student','staff','superadmin'];
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log(this.currentUser.role);
   }
   compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

   compareByValue(f1: any, f2: any) { 
     return f1 && f2 && f1.name === f2.name; 
   }
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: [{value:'',disabled:true}, Validators.required],
      title: ["",Validators.required],
      age: ['', Validators.required],
      cellphone: [''],
      role: [{value:'',disabled:true},Validators.required],
      grade: ['',Validators.required],
      school: ['',Validators.required],
      username: [{value:'',disabled:true}, Validators.required],
  });
  this.setValidationstoForm();
this.loadProfileData();
  }
setValidationstoForm(){
  if(this.currentUser.role=='student'){
    this.profileForm.get('school').setValidators([Validators.required]);
    this.profileForm.get('age').setValidators(null);
    this.profileForm.get('title').setValidators(null);
  }
  else{
    this.profileForm.get('grade').setValidators(null);
  }
}

  loadProfileData(){
  this.profileForm.controls["username"].setValue(this.currentUser.userName);
  this.profileForm.controls["school"].setValue(this.currentUser.school);
  this.profileForm.controls["grade"].setValue(this.currentUser.grade);
  this.profileForm.controls["role"].setValue(this.currentUser.role, {onlySelf: true});
  this.profileForm.controls["cellphone"].setValue(this.currentUser.cellPhone);
  this.profileForm.controls["age"].setValue(this.currentUser.age);
  this.profileForm.controls["title"].setValue(this.currentUser.title);
  this.profileForm.controls["email"].setValue(this.currentUser.email);
  this.profileForm.controls["lastName"].setValue(this.currentUser.lastName);
  this.profileForm.controls["middleName"].setValue(this.currentUser.middleName);
  this.profileForm.controls["firstName"].setValue(this.currentUser.firstName);
  }
  get f() { return this.profileForm.controls; }
  onSubmit(){
    this.currentUser.userName= this.profileForm.controls["username"].value;     
    this.currentUser.school=  this.profileForm.controls["school"].value;      
    this.currentUser.grade=  this.profileForm.controls["grade"].value;       
    this.currentUser.role=  this.profileForm.controls["role"].value;        
    this.currentUser.cellPhone=  this.profileForm.controls["cellphone"].value;   
    this.currentUser.age=  this.profileForm.controls["age"].value;         
    this.currentUser.title=  this.profileForm.controls["title"].value;       
    this.currentUser.email=  this.profileForm.controls["email"].value;       
    this.currentUser.lastName=  this.profileForm.controls["lastName"].value;    
    this.currentUser.middleName=  this.profileForm.controls["middleName"].value;  
    this.currentUser.firstName=  this.profileForm.controls["firstName"].value;  
    console.log(this.currentUser);
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }

}
