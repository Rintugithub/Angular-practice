import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit,AfterViewInit {
  value!:string;
 username:any;
 data:string="hai";
 colours:string[]=["red","green","blue","orange","yellow","lightgreen","lightblue"];
 colourval:any;
 @ViewChild("col")marker!:ElementRef<any>;
  constructor() { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    // console.log(this.value);



  }

  getval(item:any){
  console.log((item.target as HTMLInputElement).value);
  this.username= (item.target as HTMLInputElement).value;
}

changebg(color:any){
  console.log((color.target as HTMLInputElement).value);
  this.colourval= (color.target as HTMLInputElement).value;
  this.marker.nativeElement.style.backgroundColor = this.colourval;


}

}
