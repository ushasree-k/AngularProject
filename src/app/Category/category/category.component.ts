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
  categoryList:CategoryModel[]=[]
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
    if(localStorage.getItem("categoryList")){
      this.categoryList = JSON.parse(localStorage.getItem("categoryList"));
    }
    else{
      this.categoryList = 
      [
        {"CategoryName" : 'HealthCare',"CategoryProgram":'Hospitol'},
        {"CategoryName" : 'Healthcare',"CategoryProgram":'Oldage Homes'},
        {"CategoryName" : 'Fire department',"CategoryProgram":'Rescue'},
        {"CategoryName" : 'Kicks Karate',"CategoryProgram":'Instructor'}];
        localStorage.setItem("categoryList",JSON.stringify(this.categoryList));
    }
    console.log(this.categoryList);
    this.EditCategory='false';
    this.AddCategory='false';
    this.DeleteCategory='false';
  }

  ngOnInit() {
  }

}
