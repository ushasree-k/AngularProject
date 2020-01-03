import { Component, OnInit } from '@angular/core';
import { VolunteerTrackingModel } from '../Model/volunteerTracking.model';
import { Router } from '@angular/router';
import {VolunteerTrackingService} from '../Services/volunteertracking.service';
import { UserModel } from '../Model/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationModel } from '../Model/registration.model';
@Component({
  selector: 'app-volunteertracking',
  templateUrl: './volunteertracking.component.html',
  styleUrls: ['./volunteertracking.component.css']
})
export class VolunteertrackingComponent implements OnInit {
  contenteditable:boolean;
  actiontext:string;
  currentUser:RegistrationModel;
  VolunteerList:VolunteerTrackingModel[]=[];
  voluteerForm: any;
  message: string;
  studentIdUpdate  = null;
  dataSaved: boolean = false;
  constructor(private formbulider: FormBuilder,private router:Router,private volunteerTrackingService:VolunteerTrackingService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser){
        //this.router.navigate(['volunteer']);
    }
    else{
        this.router.navigate(['/']);
    }
    this.contenteditable = false;
    this.actiontext="Edit";
   }

  ngOnInit() {
    this.voluteerForm = this.formbulider.group({  
      StudentName: ['', [Validators.required]],  
      DateOfService: ['', [Validators.required]],  
      HoursCompleted: ['', [Validators.required]],  
      Preparation: ['', [Validators.required]],  
      Action: ['', [Validators.required]],  
      Reflection: [''],  
      SupervisorFeedback: [''],  
      Approved: [''],  
      DateApproved: [''],  
      SupervisorUserName: [''],  
    });  
    this.loadAllVolunteerData();
  }

  onFormSubmit() {  
    this.dataSaved = false;  
    const student = this.voluteerForm.value;  
    this.CreateStudent(student);  
    this.voluteerForm.reset();  
  }  
  CreateStudent(student: VolunteerTrackingModel) {  
    console.log(student);
    if (this.studentIdUpdate== null) { 
       student.Approved="2"; 
       var x= this.volunteerTrackingService.getMaxStudentId();
       student.StudentId = x+1;
       student.userName = this.currentUser.userName;
      var resp = this.volunteerTrackingService.createStudent(student);
        
          this.dataSaved = true;  
          this.message = 'Record saved Successfully';  
          this.loadAllVolunteerData();  
          this.studentIdUpdate = null;  
          this.voluteerForm.reset();  
        }  
      
    else {  
      student.StudentId = this.studentIdUpdate;
      student.userName = this.currentUser.userName;
      this.volunteerTrackingService.updateStudent(student)
        this.dataSaved = true;  
        this.message = 'Record Updated Successfully';  
        this.loadAllVolunteerData();  
        this.voluteerForm.reset();  
    }  
  }   

  loadAllVolunteerData(){
    this.VolunteerList= this.volunteerTrackingService.getVolunteerData(this.currentUser)
  }

  loadStudentDataToEdit(employeeId: string) {  
    var data = this.volunteerTrackingService.getStudentById(Number.parseInt(employeeId))[0];
    this.studentIdUpdate = data.StudentId;
    this.message = null;  
    this.dataSaved = false;  
     this.voluteerForm.controls['StudentName'].setValue(data.StudentName);  
     this.voluteerForm.controls['DateOfService'].setValue(data.DateOfService);  
      this.voluteerForm.controls['HoursCompleted'].setValue(data.HoursCompleted);  
      this.voluteerForm.controls['Preparation'].setValue(data.Preparation);  
      this.voluteerForm.controls['Action'].setValue(data.Action);  
      this.voluteerForm.controls['Reflection'].setValue(data.Reflection);  
      this.voluteerForm.controls['SupervisorFeedback'].setValue(data.SupervisorFeedback);  
      this.voluteerForm.controls['Approved'].setValue(data.Approved);  
      this.voluteerForm.controls['DateApproved'].setValue(data.DateApproved);  
      this.voluteerForm.controls['SupervisorUserName'].setValue(data.SupervisorUserName); 
  }  
  onEdit(volunteer:VolunteerTrackingModel){
if(this.actiontext == "Edit"){
    this.contenteditable = true;
    this.actiontext = "Save"
    console.log(this.contenteditable);}
    else if(this.actiontext == "Save"){
        // Add to this.VolunteerList
        this.actiontext = "Edit"
        this.contenteditable = false;
    }
  }
  deleteStudent(employeeId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.volunteerTrackingService.deleteStudentById(Number.parseInt(employeeId));  
      this.dataSaved = true;  
      this.message = 'Record Deleted Succefully';  
      this.loadAllVolunteerData();  
      this.studentIdUpdate = null;  
      this.voluteerForm.reset();  
  }  }
  resetForm() {  
    this.voluteerForm.reset();  
    this.message = null;  
    this.dataSaved = false;  
  }  

}
