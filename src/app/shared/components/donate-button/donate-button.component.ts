import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-donate-button',
    templateUrl: './donate-button.component.html',
    styleUrls: ['./donate-button.component.scss']
})
export class DonateButtonComponent implements OnInit {

    privatUrl = "https://next.privat24.ua/payments/form/%7B%22token%22%3A%2297d62ab7-a4d0-408e-b500-6d0805f40626%22%7D";

    constructor() { }

    ngOnInit(): void { }

    donate() {
        window.open(this.privatUrl, "_blank");
    }

}
