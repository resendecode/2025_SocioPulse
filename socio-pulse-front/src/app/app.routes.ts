import { Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {ProjectMakerComponent} from './project-maker/project-maker.component';

export const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'project-maker', component: ProjectMakerComponent}
];
