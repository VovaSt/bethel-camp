import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';



@NgModule({
  declarations: [
    LandingComponent,
    MainPageComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
