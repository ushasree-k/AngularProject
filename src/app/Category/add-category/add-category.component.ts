import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/Model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  category:CategoryModel;
  categoryList :CategoryModel[] =[];
  constructor( private formBuilder: FormBuilder,private router:Router) { 
    if(localStorage.getItem("categoryList")){
      this.categoryList = JSON.parse(localStorage.getItem("categoryList"));
    }
    console.log(this.categoryList);
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryProgram:['', Validators.required]
  });
  }
  onSubmit() {
    

    // stop here if form is invalid
    if (this.categoryForm.invalid) {
        return;
    }
    this.category = new CategoryModel();
    this.category.CategoryName = this.categoryForm.get("categoryName").value
    this.category.CategoryProgram = this.categoryForm.get("categoryProgram").value
    

    this.categoryList.push(this.category);
    localStorage.setItem("categoryList",JSON.stringify(this.categoryList));

    this.router.navigate(['category']);
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
