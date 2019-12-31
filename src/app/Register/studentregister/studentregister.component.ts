import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertserviceService } from 'src/app/alertservice.service';
import { UserModel } from 'src/app/Model/user.model';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
    registereduser:UserModel;
    existinguserList:UserModel[]=[];
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      // private authenticationService: AuthenticationService,
      // private userService: UserService,
      private alertService: AlertserviceService
  ) { 
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
          grade: ['', Validators.required, ],
          school: ['', Validators.required],
          cellphone: [''],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.registereduser = new UserModel();
      this.registereduser.UserName = this.registerForm.get("username").value
      this.registereduser.PassWord = this.registerForm.get("password").value
      this.registereduser.Email = this.registerForm.get("email").value
      this.registereduser.Role = 'Student';
      this.registereduser.Status = 'Active';

      this.existinguserList.push(this.registereduser);
      localStorage.setItem("existinguserList",JSON.stringify(this.existinguserList));
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
