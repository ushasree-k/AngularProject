import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register :string;
roles:string[];
  constructor() { 
    this.register = 'false';
    this.roles  = 'student,staff'.split(',');
  }

  ngOnInit() {
  }

}
