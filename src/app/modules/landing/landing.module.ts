import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsComponent } from './pages/about-us-page/about-us.component';
import { ProjectsComponent } from './pages/projects-page/projects.component';
import { ProjectBlockComponent } from './pages/projects-page/project-block/project-block.component';



@NgModule({
    declarations: [
        LandingComponent,
        MainPageComponent,
        AboutUsComponent,
        ProjectsComponent,
        ProjectBlockComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule
    ]
})
export class LandingModule { }
