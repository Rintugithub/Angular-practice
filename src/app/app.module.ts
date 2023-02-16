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
import { ObservableComponent } from './observable/observable.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChildComponent } from './child/child.component';
import { AuthGuard } from './auth.guard';
import { CounterComponent } from './counter/counter.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { WidgetComponent } from './widget/widget.component';

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
    ObservableComponent,
    CalculatorComponent,
    CounterComponent,
    ContentProjectionComponent,
    WidgetComponent,
    // ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // ProductsModule
    // MatSnackBarModule
  ],
  providers: [UserdataService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
