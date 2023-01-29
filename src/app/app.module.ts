import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule } from  '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationComponent } from './location/location.component';
import { ProductdashboardModule } from './productdashboard/productdashboard.module';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    FeedbackComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // MatSnackBarModule
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
