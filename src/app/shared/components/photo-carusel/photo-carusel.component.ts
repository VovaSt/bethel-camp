import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-photo-carusel',
    templateUrl: './photo-carusel.component.html',
    styleUrls: ['./photo-carusel.component.scss']
})
export class PhotoCaruselComponent implements OnInit {

    @Input() images: string[];

    constructor() { }

    ngOnInit(): void {
    }

}
