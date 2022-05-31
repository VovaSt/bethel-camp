import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AboutRoutingModule } from "./about-routing.module";
import { ConfessionComponent } from "./pages/confession/confession.component";
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ChurchHistoryComponent } from './pages/church-history/church-history.component';
import { MinistersComponent } from "./pages/ministers/ministers.component";

@NgModule({
    declarations: [
        ConfessionComponent,
        ScheduleComponent,
        MinistersComponent,
        ChurchHistoryComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModule
    ],
  })
  export class AboutModule { }