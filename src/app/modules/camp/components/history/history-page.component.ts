import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPageComponent implements OnInit {

    public images = [
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-1.jpg' },
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-2.jpg' },
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-3.jpg' },
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-4.jpg' },
        { path: 'https://camp-bethel.s3.amazonaws.com/beginning-state/camp-bethel-5.jpg' }
    ];

    constructor() { }

    ngOnInit(): void { }

}
