import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonateModalComponent } from '../donate-modal/donate-modal.component';

@Component({
    selector: 'app-donate-button',
    templateUrl: './donate-button.component.html',
    styleUrls: ['./donate-button.component.scss']
})
export class DonateButtonComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void { }

    donate() {
        this.dialog.open(DonateModalComponent, { maxWidth: '94vw'});
    }

}
