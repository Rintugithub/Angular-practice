import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
public counter!:any;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.counter++;

  }
  decrement(){
    this.counter--;

  }
  rst(){
    this.counter = 0;
  }

}
