import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { environment } from './../../../../environments/environment';
import { DonateModalComponent } from '../donate-modal/donate-modal.component';

@Component({
    selector: 'app-donate-button',
    templateUrl: './donate-button.component.html',
    styleUrls: ['./donate-button.component.scss']
})
export class DonateButtonComponent implements OnInit {

    privatUrl = environment.private24Url;

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void { }

    donate() {
        // window.open(this.privatUrl, "_blank");
        this.dialog.open(DonateModalComponent);
    }

}
