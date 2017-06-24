import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OpportunityComponent } from '../opportunity/opportunity.component';
import { AboutUsComponent } from '../about-us/about-us.component';

const appRoutes: Routes = [
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'contact', component: OpportunityComponent },
    { path: '',   component:HomeComponent },
    { path: '**', component: HomeComponent }
];


@NgModule({
    imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
     exports: [
    RouterModule
  ],
})



export class AppRoutingModule { }
