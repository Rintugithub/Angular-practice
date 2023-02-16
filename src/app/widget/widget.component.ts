import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
  ]
})
export class WidgetComponent implements OnInit {
  @Input() products!:any[];


  constructor() { }

  ngOnInit(): void {
  }

}
