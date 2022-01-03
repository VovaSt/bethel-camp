import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPageComponent implements OnInit {

    public images = [
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-1.jpg'},
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-2.jpg'},
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-3.jpg'},
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-4.jpg'},
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-5.jpg'}
    ];

    hideArrows$: Observable<boolean>;

    constructor() { }

    ngOnInit(): void {
        this.hideArrows$ = fromEvent(window, 'resize')
            .pipe(
                map(event => (event.target as Window).innerWidth > 1024),
                distinctUntilChanged(),
                startWith(window.innerWidth > 1024)
            );
    }

}
