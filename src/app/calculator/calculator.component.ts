import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @ViewChild("col")marker!:ElementRef<any>;
  buttonvalue:any;

  constructor() { }

  ngOnInit(): void {


  }
   btnClick(data:any){
    this.buttonvalue =(data.target as HTMLInputElement).value;
    console.log(this.buttonvalue);
    console.log( this.marker.nativeElement.buttonvalue);


    this.marker.nativeElement.buttonvalue += this.buttonvalue;}
    clearScreen(){
      this.marker.nativeElement.value = "";
   }
   findResult(){
    let result = eval( this.marker.nativeElement.value);
    this.marker.nativeElement.value = result;
    console.log(result);


 }

}
