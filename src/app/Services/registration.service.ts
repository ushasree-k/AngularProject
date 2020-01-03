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
export class RegistrationService {
    //existingUsers:UserModel[]=[];
    existingUsers:RegistrationModel[] = [];
    
    constructor(private httpClient: HttpClient) {
        //private http: HttpClient
            //Service Call to json file or json file can be replacecd with actual DB call 
            if(!localStorage.getItem("existingUsers")){
            this.httpClient.get("assets/Data/users.json").subscribe(data =>{
              var d = data as RegistrationModel[];
            d.forEach(element => {
                console.log(element);
                let user = new RegistrationModel();
                 user.email = element.email;
                 user.password = element.password;
                 user.role= element.role;
                 user.status=element.status;
                 user.userName = element.userName;
                 user.cellPhone = element.cellPhone;
                 user.firstName = element.firstName;
                 user.lastName = element.lastName;
                 user.middleName= element.middleName;
                 user.grade= element.grade;
                 user.title= element.title;
                 this.existingUsers.push(user);
                 localStorage.setItem("existingUsers",JSON.stringify(this.existingUsers));
            });
          });
        }
        else{
            this.existingUsers = JSON.parse(localStorage.getItem("existingUsers"));
        }
      }


    RegisterStudent(user:RegistrationModel){
        this.existingUsers.push(user);
        localStorage.setItem("existingUsers",JSON.stringify(this.existingUsers));
        console.log(this.existingUsers);
        // this.httpClient.post("assets/Data/users.json",JSON.stringify(user)).subscribe(data =>{
        //     console.log(data);
        // });
    }

    RegisterStaff(user:RegistrationModel){
        this.existingUsers.push(user);
        localStorage.setItem("existingUsers",JSON.stringify(this.existingUsers));
        console.log(this.existingUsers);
        // this.httpClient.post("assets/Data/users.json",JSON.stringify(user)).subscribe(data =>{
        //     console.log(data);
        // });
    }

    Register(user:RegistrationModel){
      this.existingUsers.push(user);
      localStorage.setItem("existingUsers",JSON.stringify(this.existingUsers));
      console.log(this.existingUsers);
      // this.httpClient.post("assets/Data/users.json",JSON.stringify(user)).subscribe(data =>{
      //     console.log(data);
      // });
  }
    
    // public get currentUserValue(): UserModel {
    //     return this.currentUserSubject.value;
    // }

    // getVolunteerData(user:UserModel) {
      
    //   //To be deleted when actual services are applied
    //   //console.log(this.existingUsers);
      
    //   if (user[0].Role === 'Student' || user[0].Role === 'student' ){
    //   this.volunteerData = this.existingvolunteerdata.filter(x=>(x.userName == user.UserName));
    //   console.log(this.volunteerData);
    //   }
    //   else{
    //       this.volunteerData = this.existingvolunteerdata;
    //   }
    //   //console.log(user);
    //    return this.volunteerData;
    //   }

    //   getStudentById(StudentId:number){
    //     this.volunteerData = this.existingvolunteerdata.filter(x=>(x.StudentId ==StudentId));
    //     return this.volunteerData;
    //   }
    //   deleteStudentById(StudentId:number){
    //     this.existingvolunteerdata = this.existingvolunteerdata.filter(x=>x.StudentId != StudentId);
    //   }
    //   createStudent(createStudent:VolunteerTrackingModel){
    //     this.existingvolunteerdata.push(createStudent);
    //   }
    //   updateStudent(updateStudent:VolunteerTrackingModel){
    //     console.log(updateStudent);
    //     //var upstudent = this.existingvolunteerdata.filter(x=>x.StudentId==updateStudent.StudentId);
    //     this.existingvolunteerdata = this.existingvolunteerdata.filter(x=>x.StudentId != updateStudent.StudentId);
    //     this.existingvolunteerdata.push(updateStudent);
    //   }

    //   getMaxStudentId(){
    //     var max = 0;
    //     this.existingvolunteerdata.forEach(element => {
    //       if(element.StudentId > max){
    //         max = element.StudentId;
    //         console.log(max);
    //       }
    //     });
    //     return max;
    //   }
}
