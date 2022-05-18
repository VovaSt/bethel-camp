import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChurchEventsComponent } from "./containers/church-events/church-events.component";

const routes: Routes = [
    {
        path: '',
        component: ChurchEventsComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChurchEventsRoutingModule { }
