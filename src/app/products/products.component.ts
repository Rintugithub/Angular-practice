import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedcountry:any;
  countries:any[]=[
    {code:"ind",country:"India"},
    {code:"aus",country:"Australia"},
    {code:"nz",country:"Newzeland"},
    {code:"chi",country:"China"},
    {code:"rus",country:"Russia"},

  ]

  constructor() { }

  ngOnInit(): void {
    console.log("product component");

  }
  choice(code:any){
    this.selectedcountry = (code.target as HTMLInputElement).value;
  }

}
