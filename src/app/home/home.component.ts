import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild,ViewChildren} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit,AfterViewInit {
  inputdata:any;
  value:string="";
 username:any;
 data:string="hai";
 colours:string[]=["red","green","blue","orange","yellow","lightgreen","lightblue"];
 colourval:any;
 @ViewChild("col")marker!:ElementRef<any>;
 @ViewChildren("msg")markers!:QueryList<any>;
  constructor() { }
  ngAfterViewInit(): void {
    this.markers.map(value=> value.nativeElement.style.color = "orange");


  }

  ngOnInit(): void {
    // console.log(this.value);
 }

  getval(item:any){
  console.log((item.target as HTMLInputElement).value);
  this.username= (item.target as HTMLInputElement).value;
}

changebg(color:any){
  // console.log((color.target as HTMLInputElement).value);
  // this.colourval= (color.target as HTMLInputElement).value;
  // this.marker.nativeElement.style.backgroundColor = this.colourval;
  console.log(color);
  this.colourval= color;
  this.marker.nativeElement.style.backgroundColor = this.colourval;


}
search(value:any){
  this.inputdata = value;
  console.log(this.inputdata);

}

}
