import { LandingHeader, landingHeaderType } from './../../core/constants/landing';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, Self, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, throttleTime } from 'rxjs/operators';

import { ModulesManagerService } from './../../core/services/mudule-mnager.service';
import { UnsubscribeService } from 'src/app/core/services/unsubscribe.service';
import { Language } from '../../core/enums/language.enum';
import { LanguageService } from '../../core/services/language.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [UnsubscribeService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    public languages = Object.values(Language);
    public currentLang: Language;
    headerLinks: LandingHeader[];
    private pagesLinks;
    navbarColor = false;

    @ViewChild('linksMenuTrigger') linksMenuTrigger: MatMenuTrigger;
    @ViewChild('langsMenuTrigger') langsMenuTrigger: MatMenuTrigger;

    @HostListener('window:scroll', ['$event']) onscroll() {
        this.navbarColor = window.scrollY > 200 ? true : false;
    }

    constructor(
        @Self() private unsub: UnsubscribeService,
        private modulesManager: ModulesManagerService,
        private renderer: Renderer2,
        private cd: ChangeDetectorRef,
        private langService: LanguageService
    ) { }

    ngOnInit() {
        this.unsub.subs = this.modulesManager.getActiveModule$
            .pipe(filter(x => !!x), distinctUntilChanged())
            .subscribe(module => {
                console.log(module)
                this.headerLinks = landingHeaderType[module];
                this.cd.markForCheck();
            });

        this.pagesLinks = document.querySelectorAll(".page-link");
        // this.renderer.addClass(this.pagesLinks[0], 'current');

        fromEvent(window, 'scroll')
            .pipe(throttleTime(50))
            .subscribe(() => this.onScroll());

        this.unsub.subs = this.langService.getLanguageObs()
            .subscribe(lang => this.currentLang = lang);
    }

    public linkAction(id: string) {
        if (window.innerWidth <= 800) {
            this.linksMenuTrigger.openMenu();
        } else {
            this.scrollTo(id);
        }
    }

    public scrollTo(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }

    private onScroll() {
        const fromTop = window.scrollY;

        if (fromTop < 0) {
            return;
        } // fix for mobile

        this.pagesLinks.forEach(link => {
            const sectionId = link.id?.split('_')[0];
            const section = document.getElementById(sectionId);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                this.renderer.addClass(link, 'current');
            } else {
                this.renderer.removeClass(link, 'current');
            }
        });
    }

    changeLanguage(lang: Language) {
        this.langService.setLanguage(lang);
    }
}
