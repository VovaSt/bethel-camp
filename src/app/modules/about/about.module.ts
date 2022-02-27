import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ConfessionRoutingModule } from "./about-routing.module";
import { ConfessionComponent } from "./pages/confession/confession.component";

@NgModule({
    declarations: [
        ConfessionComponent
    ],
    imports: [
        CommonModule,
        ConfessionRoutingModule,
        SharedModule
    ],
  })
  export class AboutModule { }