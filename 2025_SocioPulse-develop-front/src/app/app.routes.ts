import { Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {ProjectMakerComponent} from './project-maker/project-maker.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {FaqPageComponent} from './faq-page/faq-page.component';

export const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'project-maker', component: ProjectMakerComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'faq-page', component: FaqPageComponent}
];
