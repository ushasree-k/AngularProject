import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-voluteerregister',
  templateUrl: './voluteerregister.component.html',
  styleUrls: ['./voluteerregister.component.css']
})
export class VoluteerregisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      dateOfService: [''],
      hoursCompleted: ['', Validators.required],
      preparation: ['', Validators.required],
      action: ['', Validators.required, ],
      reflection: ['', Validators.required],
      supervisorFeedback: [''],
      approved: ['', Validators.required],
      dateApproved: ['', Validators.required],
      supervisorUserName: ['', Validators.required]
  });
  }

}
