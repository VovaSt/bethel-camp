import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfessionComponent } from './pages/confession/confession.component';

const routes: Routes = [
    {
        path: 'confession',
        component: ConfessionComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConfessionRoutingModule { }
