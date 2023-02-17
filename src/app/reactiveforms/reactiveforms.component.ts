import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   submit = false;
  ngOnInit(): void {
  }
  registrationForm = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  email:['',[Validators.required,Validators.email]],

   });
   get f(){
     return this.registrationForm.controls;
   }
   onSubmit(){
    this.submit = true;
    console.log("clicked");
    console.log(this.f);
    
   }

}
