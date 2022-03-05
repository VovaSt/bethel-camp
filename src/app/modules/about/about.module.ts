import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ConfessionRoutingModule } from "./about-routing.module";
import { ConfessionComponent } from "./pages/confession/confession.component";
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ServantsComponent } from './pages/servants/servants.component';

@NgModule({
    declarations: [
        ConfessionComponent,
        ScheduleComponent,
        ServantsComponent
    ],
    imports: [
        CommonModule,
        ConfessionRoutingModule,
        SharedModule
    ],
  })
  export class AboutModule { }