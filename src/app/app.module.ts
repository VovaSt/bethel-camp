import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingModule } from './modules/landing/landing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
