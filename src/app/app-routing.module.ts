import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUnderDevelopmentComponent } from './components/page-under-development/page-under-development.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
    },
    {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
    },
    {
        path: 'camp',
        loadChildren: () => import('./modules/camp/camp.module').then((m) => m.CampModule),
    },
    {
        path: 'events',
        loadChildren: () => import('./modules/church-events/church-events.module').then((m) => m.ChurchEventsModule),
    },
    {
        path: 'war-2022',
        loadChildren: () => import('./modules/war-2022/war.module').then((m) => m.WarModule),
    },
    {
        path: 'page-under-development',
        component: PageUnderDevelopmentComponent
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
