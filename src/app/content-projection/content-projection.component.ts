import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {
  public SalesProduct:any[]=[
    {id:1 , name:'Acs', price:100},
    {id:2 , name:'Phones', price:1000},
    {id:3 , name:'Fashion', price:2000},
    {id:4 , name:'Electronics', price:3000},

  ];
  public TopProduct:any[]=[
    {id:1 , name:'laptops', price:100},
    {id:2 , name:'ovens', price:1000},
    {id:3 , name:'fridge', price:2000},
    {id:4 , name:'washingmachine', price:3000},

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
