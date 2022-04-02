import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-donate-button',
    templateUrl: './donate-button.component.html',
    styleUrls: ['./donate-button.component.scss']
})
export class DonateButtonComponent implements OnInit {

    privatUrl = environment.private24Url;

    constructor() { }

    ngOnInit(): void { }

    donate() {
        window.open(this.privatUrl, "_blank");
    }

}
