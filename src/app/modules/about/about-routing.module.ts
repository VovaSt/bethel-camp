import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfessionComponent } from './pages/confession/confession.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

const routes: Routes = [
    {
        path: 'confession',
        component: ConfessionComponent
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConfessionRoutingModule { }
