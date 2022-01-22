import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { CampRoutingModule } from './camp-routing.module';
import { MainPageComponent } from './components/main/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HistoryPageComponent } from './components/history/history-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectBlockComponent } from './components/project-block/project-block.component';
import { SharedModule } from 'src/app/shared/shared.module';


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
        CampRoutingModule,
        SharedModule
    ]
})
export class CampModule { }
