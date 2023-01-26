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

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'address', pathMatch: 'full' },

      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent },
    ],
  },

  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent ,
  children: [

    { path: 'location',outlet: 'map', component: LocationComponent },
    { path: 'feedback',outlet: 'feeds', component: FeedbackComponent },
  ],
},
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'users' },
  { path: 'product',
  loadChildren: () => import('./productdashboard/productdashboard.module').then(m => m.ProductdashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
