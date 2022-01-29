import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';


const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'projects',
        component: ProjectPageComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CampRoutingModule { }
