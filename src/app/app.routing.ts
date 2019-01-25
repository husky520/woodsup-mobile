/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { NotFound404Component } from './not-found404.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { TeamComponent } from './pages/team/team.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { TrialComponent } from './pages/trial/trial.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'team', component: TeamComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'trial', component: TrialComponent },
  { path: '**', redirectTo: '' }
];
