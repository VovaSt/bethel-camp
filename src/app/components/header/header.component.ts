import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    languages = ['EN', 'UA', 'RU'];
    currentLang: string = 'UA';

    constructor() {}

    ngOnInit() {}

    scrollTo(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }

    changeLanguage(event) {}
}
