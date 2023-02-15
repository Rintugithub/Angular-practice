import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ChildComponent } from '../child/child.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
  constructor(){
    console.log("product dashboard");

  }
}
