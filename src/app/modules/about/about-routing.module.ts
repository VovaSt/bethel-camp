import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfessionComponent } from './pages/confession/confession.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ServantsComponent } from './pages/servants/servants.component';

const routes: Routes = [
    {
        path: 'confession',
        component: ConfessionComponent
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'servants',
        component: ServantsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConfessionRoutingModule { }
