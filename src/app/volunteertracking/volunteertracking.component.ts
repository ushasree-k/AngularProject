import { Component, OnInit } from '@angular/core';
import { VolunteerTrackingModel } from '../Model/volunteerTracking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteertracking',
  templateUrl: './volunteertracking.component.html',
  styleUrls: ['./volunteertracking.component.css']
})
export class VolunteertrackingComponent implements OnInit {
  contenteditable:boolean;
  actiontext:string;
  VolunteerList:VolunteerTrackingModel[]=[
    {"StudentId" : 123,"userName":"test", "StudentName":"john","DateOfService":'2019-12-12',"HoursCompleted":2,"Preparation":"","Action":"","Reflection":"","SupervisorFeedback":"","Approved":"",DateApproved:'2019-12-12',"SupervisorUserName":"xyz"},
    {"StudentId" : 121,"userName":"usha","StudentName":"dean","DateOfService":'2019-12-12',"HoursCompleted":2,"Preparation":"","Action":"","Reflection":"","SupervisorFeedback":"","Approved":"",DateApproved:'2019-12-12',"SupervisorUserName":"xxx"},
    {"StudentId" : 132,"userName":"sarat","StudentName":"sarah","DateOfService":'2019-12-12',"HoursCompleted":2,"Preparation":"","Action":"","Reflection":"","SupervisorFeedback":"","Approved":"",DateApproved:'2019-12-12',"SupervisorUserName":"vvv"}];
  constructor(private router:Router) {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    if(user){
        this.router.navigate(['volunteer']);
    }
    else{
        this.router.navigate(['/']);
    }
    this.contenteditable = false;
    this.actiontext="Edit";
    this.VolunteerList = this.VolunteerList.filter(x=>x.userName == user[0].UserName)
   }

  ngOnInit() {
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

}
