import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { UserModel } from '../Model/user.model';

//import { AlertService, AuthenticationService } from '@/_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    existinguserList: UserModel[] ;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        // private alertService: AlertService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
        this.existinguserList =JSON.parse(localStorage.getItem("existinguserList"));
        console.log(this.existinguserList);
        if(this.existinguserList){

        }
        else{
            this.existinguserList = [{"UserName":"usha","PassWord":"test","Role":"student","Status":"InActive","Email":"u@gmail.com"},
            {"UserName":"sarat","PassWord":"text","Role":"superAdmin","Status":"Active","Email":"pj@gmail.com"}]
            localStorage.setItem("existinguserList",JSON.stringify(this.existinguserList));
        }
        

        var user = localStorage.getItem('currentUser');
        if(user){
            this.router.navigate(['volunteer']);
        }
        else{
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        var user = this.authenticationService.login(this.f.username.value, this.f.password.value,this.existinguserList);
        if(user){
            this.router.navigate(['volunteer']);
        }
        else{
            this.loading = false;
        }
            // .pipe(first())
            // .subscribe(
            //     data => {
            //         this.router.navigate([this.returnUrl]);
            //     },
            //     error => {
            //         //this.alertService.error(error);
            //         this.loading = false;
            //     });
    }
}