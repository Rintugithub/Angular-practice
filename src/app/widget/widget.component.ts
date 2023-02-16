import { Component, ContentChild, Input, OnInit, ElementRef, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
  ]
})
export class WidgetComponent implements OnInit,AfterContentInit {
  @Input() products!:any[];
  @ContentChildren("head")contentHeader!:QueryList<any>;


  constructor() { }

  ngOnInit(): void {

  }
  ngAfterContentInit() {
    this.contentHeader.map(value=> value.nativeElement.style.color = "red");



  }


}
