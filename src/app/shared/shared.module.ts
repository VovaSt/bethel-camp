import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoCaruselComponent } from './components/photo-carusel/photo-carusel.component';
import { DonateButtonComponent } from './components/donate-button/donate-button.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [PhotoCaruselComponent, DonateButtonComponent],
    imports: [
        CommonModule,
        TranslateModule,
        IvyCarouselModule,
        MatButtonModule,
    ],
    exports: [
        MatButtonToggleModule,
        MatProgressBarModule,
        MatButtonModule,
        MatMenuModule,
        TranslateModule,
        MatExpansionModule,

        PhotoCaruselComponent,
        DonateButtonComponent,
    ],
})
export class SharedModule {}
