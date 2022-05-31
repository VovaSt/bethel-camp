import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChurchHistoryComponent } from './pages/church-history/church-history.component';
import { ConfessionComponent } from './pages/confession/confession.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MinistersComponent } from './pages/ministers/ministers.component';

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
        path: 'ministers',
        component: MinistersComponent
    },
    {
        path: 'history-of-church',
        component: ChurchHistoryComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AboutRoutingModule { }
