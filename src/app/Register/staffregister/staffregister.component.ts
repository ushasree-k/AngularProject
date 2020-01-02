import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AlertserviceService} from '../../alertservice.service';
import { UserModel } from 'src/app/Model/user.model';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-staffregister',
  templateUrl: './staffregister.component.html',
  styleUrls: ['./staffregister.component.css']
})
export class StaffregisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  titles:string[];
  statuses:string[];
  registereduser:UserModel;
  existinguserList:UserModel[]=[];
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private registrationService:RegistrationService,
      // private authenticationService: AuthenticationService,
      // private userService: UserService,
       private alertService: AlertserviceService
  ) { 
    this.titles = "Principal,AP,Branch Administrator".split(',');
    this.statuses="Admin,Clerk,SuperAdmin".split(',');
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
      this.registereduser = new  UserModel();
      if(JSON.parse(localStorage.getItem("existinguserList"))){
      this.existinguserList = JSON.parse(localStorage.getItem("existinguserList"));
      }
      console.log(this.existinguserList);
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          middleName: [''],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          organization: ['', Validators.required],
          title: ['', Validators.required],
          age: ['', Validators.required],
          cellphone: [''],
          role: ['',Validators.required],
          school: ['',Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log("formclik");
      this.submitted = true;
    console.log(this.registerForm);
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.registereduser = new UserModel();
      this.registereduser.UserName = this.registerForm.get("username").value;
      this.registereduser.PassWord = this.registerForm.get("password").value;
      this.registereduser.Email = this.registerForm.get("email").value;
      this.registereduser.Role = this.registerForm.get("role").value;
      this.registereduser.Status = 'Active';

      // this.existinguserList.push(this.registereduser);
      this.registrationService.RegisterStaff(this.registereduser);
      // console.log(this.existinguserList)
      // localStorage.setItem("existinguserList",JSON.stringify(this.existinguserList));
      this.loading = true;
      this.alertService.success('Registration successful', true);
      this.router.navigate(['/login']);
      // this.userService.register(this.registerForm.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', true);
      //             this.router.navigate(['/login']);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }

}
