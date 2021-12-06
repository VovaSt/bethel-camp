import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

    public images = [
        { path: 'https://scontent.fiev15-1.fna.fbcdn.net/v/t31.18172-8/20748418_1473801089376225_4469326711703674412_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a83260&_nc_ohc=Q3dzTV-9JMIAX9E4rGW&tn=oLr5L4AKYsk9nY6X&_nc_ht=scontent.fiev15-1.fna&oh=cbe698bf649a154b00c6968c3816ff2c&oe=61CCE387' },
        { path: 'https://scontent.fiev15-1.fna.fbcdn.net/v/t31.18172-8/20748418_1473801089376225_4469326711703674412_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a83260&_nc_ohc=Q3dzTV-9JMIAX9E4rGW&tn=oLr5L4AKYsk9nY6X&_nc_ht=scontent.fiev15-1.fna&oh=cbe698bf649a154b00c6968c3816ff2c&oe=61CCE387' },
        { path: 'https://scontent.fiev15-1.fna.fbcdn.net/v/t31.18172-8/20748418_1473801089376225_4469326711703674412_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a83260&_nc_ohc=Q3dzTV-9JMIAX9E4rGW&tn=oLr5L4AKYsk9nY6X&_nc_ht=scontent.fiev15-1.fna&oh=cbe698bf649a154b00c6968c3816ff2c&oe=61CCE387' },
        { path: 'https://scontent.fiev15-1.fna.fbcdn.net/v/t31.18172-8/20748418_1473801089376225_4469326711703674412_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a83260&_nc_ohc=Q3dzTV-9JMIAX9E4rGW&tn=oLr5L4AKYsk9nY6X&_nc_ht=scontent.fiev15-1.fna&oh=cbe698bf649a154b00c6968c3816ff2c&oe=61CCE387' },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
