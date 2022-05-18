import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { SharedModule } from './../../shared/shared.module';
import { EventsListComponent } from './components/events-list/events-list.component';
import { ChurchEventsComponent } from './containers/church-events/church-events.component';
import { ChurchEventsRoutingModule } from './church-event-routing.module';


@NgModule({
  declarations: [
    EventsListComponent,
    ChurchEventsComponent
  ],
  imports: [
    CommonModule,
    ChurchEventsRoutingModule,
    SharedModule,
    MatStepperModule,
    CdkStepperModule
  ]
})
export class ChurchEventsModule { }
