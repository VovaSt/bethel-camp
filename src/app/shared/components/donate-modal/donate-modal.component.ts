import { Component } from '@angular/core';

import { environment } from './../../../../environments/environment';

@Component({
    selector: 'app-donate-modal',
    templateUrl: './donate-modal.component.html',
    styleUrls: ['./donate-modal.component.scss']
})
export class DonateModalComponent {

    privatUrl = environment.private24Url;

    constructor() { }

}
