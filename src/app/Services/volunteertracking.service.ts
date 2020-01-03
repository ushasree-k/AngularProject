import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../Model/user.model';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { VolunteerTrackingModel } from '../Model/volunteerTracking.model';
import { ThrowStmt } from '@angular/compiler';
import { RegistrationModel } from '../Model/registration.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerTrackingService {
    
    existingvolunteerdata :VolunteerTrackingModel[]=[];
    volunteerData:VolunteerTrackingModel[]=[];
    
    constructor(private httpClient: HttpClient) {
      //private http: HttpClient
         
          //Service Call to json file or json file can be replacecd with actual DB call 
          if(!localStorage.getItem("existingvolunteerdata")){
          this.httpClient.get("assets/Data/volunteertracking.json").subscribe(data =>{
            var d = data as VolunteerTrackingModel[];
          d.forEach(element => {
              console.log(element);
            //   let user = new VolunteerTrackingModel();
            //    user.Action = element.Action;
            //    user.Approved = element.Approved;
            //    user.DateApproved= element.DateApproved;
            //    user.DateOfService=element.DateOfService;
            //    user.HoursCompleted = element.HoursCompleted;
            //    user.Preparation = element.Preparation;
            //    user.HoursCompleted = element.;
            //    user.HoursCompleted = element.HoursCompleted;
               this.existingvolunteerdata.push(element);
               localStorage.setItem("existingvolunteerdata",JSON.stringify(this.existingvolunteerdata));
          }); 
        });
      }
      else{
        this.existingvolunteerdata = JSON.parse(localStorage.getItem("existingvolunteerdata"));
      }        
    }

    
    // public get currentUserValue(): UserModel {
    //     return this.currentUserSubject.value;
    // }

    getVolunteerData(user:RegistrationModel) {
      
      //To be deleted when actual services are applied
      //console.log(this.existingUsers);
      console.log(user);
      console.log(this.existingvolunteerdata);
      if (user.role === 'Student' || user.role === 'student' ){
      this.volunteerData = this.existingvolunteerdata.filter(x=>(x.userName== user.userName));
      console.log(this.volunteerData);
      }
      else{
          this.volunteerData = this.existingvolunteerdata;
      }
      //console.log(user);
       return this.volunteerData;
      }

      getStudentById(StudentId:number){
        this.volunteerData = this.existingvolunteerdata.filter(x=>(x.StudentId ==StudentId));
        return this.volunteerData;
      }
      deleteStudentById(StudentId:number){
        this.existingvolunteerdata = this.existingvolunteerdata.filter(x=>x.StudentId != StudentId);
      }
      createStudent(createStudent:VolunteerTrackingModel){
        this.existingvolunteerdata.push(createStudent);
      }
      updateStudent(updateStudent:VolunteerTrackingModel){
        console.log(updateStudent);
        //var upstudent = this.existingvolunteerdata.filter(x=>x.StudentId==updateStudent.StudentId);
        this.existingvolunteerdata = this.existingvolunteerdata.filter(x=>x.StudentId != updateStudent.StudentId);
        this.existingvolunteerdata.push(updateStudent);
      }

      getMaxStudentId(){
        var max = 0;
        this.existingvolunteerdata.forEach(element => {
          if(element.StudentId > max){
            max = element.StudentId;
            console.log(max);
          }
        });
        return max;
      }
}
