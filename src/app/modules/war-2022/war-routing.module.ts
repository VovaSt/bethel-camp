import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WarPageComponent } from "./war-page/war-page.component";

const routes: Routes = [
    {
        path: '',
        component: WarPageComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WarRoutingModule { }