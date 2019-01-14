import { NotFound404Component } from './not-found404.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { TeamComponent } from './pages/team/team.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { TrialComponent } from './pages/trial/trial.component';

import { NavbarComponent } from './common/navbar/navbar.component';
import { TimelineComponent } from './common/timeline/timeline.component';
import { IphoneComponent } from './common/iphone/iphone.component';
import { AnimationBgComponent } from './common/animation-bg/animation-bg.component';
import { FooterComponent } from './common/footer/footer.component';

export const APP_DECLARATIONS = [
  // pages
  NotFound404Component,
  HomeComponent,
  ProductComponent,
  TeamComponent,
  JoinUsComponent,
  TrialComponent,

  // Components
  NavbarComponent,
  TimelineComponent,
  IphoneComponent,
  AnimationBgComponent,
  FooterComponent,
];
