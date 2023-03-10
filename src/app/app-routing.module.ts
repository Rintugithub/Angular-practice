import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ObservableComponent } from './observable/observable.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CompanyComponent } from './company/company.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LocationComponent } from './location/location.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'observable', component: ObservableComponent },
    { path: 'calculator', component: CalculatorComponent },



  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'address', pathMatch: 'full' },

      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent },
    ],
  },

  { path: 'users', component: UsersComponent , canActivate: [AuthGuard], },
  { path: 'cnt-prjn', component: ContentProjectionComponent },
  { path: 'reactive', component: ReactiveformsComponent },


  { path: 'about', component: AboutComponent ,
  children: [

    { path: 'location',outlet: 'map', component: LocationComponent },
    { path: 'feedback',outlet: 'feeds', component: FeedbackComponent },
  ],
},
  { path: 'home', component: HomeComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: '**', redirectTo: 'users' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
