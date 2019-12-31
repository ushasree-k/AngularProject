import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../Model/category.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  DeleteCategory :string;
  EditCategory:string;
  AddCategory:string;
  categoryList:CategoryModel[]=[
    {"CategoryName" : 'HealthCare',"CategoryProgram":'Hospitol'},
    {"CategoryName" : 'Healthcare',"CategoryProgram":'Oldage Homes'},
    {"CategoryName" : 'Fire department',"CategoryProgram":'Rescue'},
    {"CategoryName" : 'Kicks Karate',"CategoryProgram":'Instructor'}];
    displayedColumns:string[];
    dataSource:any;
  constructor(private router:Router) { 
    var user = localStorage.getItem('currentUser');
    if(user){
        this.router.navigate(['category']);
    }
    else{
        this.router.navigate(['/']);
    }
    this.EditCategory='false';
    this.AddCategory='false';
    this.DeleteCategory='false';
    this.displayedColumns = ['CategoryName', 'CategoryProgram'];
    this.dataSource = this.categoryList;
  }

  ngOnInit() {
  }

}
