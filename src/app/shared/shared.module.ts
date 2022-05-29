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
import { ImageLoaderDirective } from './directives/image-loader.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { VideoPopupComponent } from './components/video-popup/video-popup.component';
import { DonateModalComponent } from './components/donate-modal/donate-modal.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [
        PhotoCaruselComponent,
        DonateButtonComponent,
        VideoPopupComponent,
        ImageLoaderDirective,
        DonateModalComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        IvyCarouselModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule
    ],
    exports: [
        MatButtonToggleModule,
        MatProgressBarModule,
        MatButtonModule,
        MatMenuModule,
        TranslateModule,
        MatExpansionModule,
        MatDialogModule,

        PhotoCaruselComponent,
        DonateButtonComponent,
        VideoPopupComponent,

        ImageLoaderDirective
    ],
})
export class SharedModule {}
