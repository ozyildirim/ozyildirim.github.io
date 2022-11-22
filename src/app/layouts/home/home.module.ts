import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ThreejsComponent } from './pages/landing/components/threejs/threejs.component';


@NgModule({
  declarations: [
    LandingComponent,
    ContactComponent,
    ProjectsComponent,
    ThreejsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    LandingComponent,
    ContactComponent,
    ProjectsComponent
  ]
})
export class HomeModule { }
