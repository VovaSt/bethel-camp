import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarPageComponent } from './war-page/war-page.component';
import { WarRoutingModule } from './war-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WarPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WarRoutingModule
  ]
})
export class WarModule { }
