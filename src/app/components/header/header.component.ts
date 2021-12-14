import { ChangeDetectionStrategy, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { Language } from 'src/app/enums/language.enum';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    public languages = Object.values(Language);
    public currentLang: Language;

    private pagesLinks;

    @ViewChild('linksMenuTrigger') linksMenuTrigger: MatMenuTrigger;
    @ViewChild('langsMenuTrigger') langsMenuTrigger: MatMenuTrigger;

    constructor(
        private renderer: Renderer2,
        private langService: LanguageService
    ) { }

    ngOnInit() {
        this.pagesLinks = document.querySelectorAll(".page-link");
        this.renderer.addClass(this.pagesLinks[0], 'current');

        fromEvent(window, 'scroll')
            .pipe(throttleTime(50))
            .subscribe(() => this.onScroll());

        this.langService.getLanguageObs()
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
