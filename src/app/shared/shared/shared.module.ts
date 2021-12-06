import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        MatButtonToggleModule,
        MatProgressBarModule,
        MatButtonModule,
        IvyCarouselModule
    ]
})
export class SharedModule { }
