import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    LandingComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
