import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsComponent } from './pages/about-us-page/about-us.component';
import { ProjectsComponent } from './pages/projects-page/projects.component';
import { ProjectBlockComponent } from './pages/projects-page/project-block/project-block.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';



@NgModule({
    declarations: [
        LandingComponent,
        MainPageComponent,
        AboutUsComponent,
        ProjectsComponent,
        ProjectBlockComponent,
        HistoryPageComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        SharedModule
    ]
})
export class LandingModule { }
