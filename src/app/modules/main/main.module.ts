import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { EventsCalendarComponent } from './pages/events-calendar/events-calendar.component';
import { MinistriesComponent } from './pages/ministries/ministries.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BroadcastComponent } from './pages/broadcast/broadcast.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    AboutUsComponent,
    EventsCalendarComponent,
    MinistriesComponent,
    DonateComponent,
    ContactComponent,
    BroadcastComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
