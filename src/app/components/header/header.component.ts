import { ChangeDetectionStrategy, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    public languages = ['EN', 'UA', 'RU'];
    public currentLang: string = 'UA';

    private pagesLinks;

    @ViewChild('linksMenuTrigger') linksMenuTrigger: MatMenuTrigger;
    @ViewChild('langsMenuTrigger') langsMenuTrigger: MatMenuTrigger;

    constructor(
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.pagesLinks = document.querySelectorAll(".page-link");

        fromEvent(window, 'scroll')
            .pipe(debounceTime(50))
            .subscribe(() => this.onScroll());
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

    changeLanguage(event) {

    }

    changeLanguageMobile(event) {
        this.currentLang = event;
    }
}
