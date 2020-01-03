import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../Model/user.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { RegistrationModel } from '../Model/registration.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() Path :string;
step1:string;
step2:string;
userName:string;
user:RegistrationModel;
logtime:Date;
  constructor(private router:Router) { 
    this.user =JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    this.userName= this.user.userName;
    this.logtime =new Date();
  }

  ngOnInit() {
    if(this.Path == '1'){
      this.step1= 'active';
      this.step2 ='';
    }
    else if(this.Path == '2'){
      this.step1= '';
      this.step2 ='active';
    }
  }
  onLogout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
