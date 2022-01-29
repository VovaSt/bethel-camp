import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectData } from '../../models/project-data.model';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

    projects: ProjectData[] = [
        {
            id: 1,
            name: 'campPage.projectsContent.tabernacle.title',
            description: 'campPage.projectsContent.tabernacle.description',
            requestIntro: 'campPage.projectsContent.tabernacle.requestIntro',
            requests: [
                {
                    text: 'campPage.projectsContent.tabernacle.requests.tile',
                    money: 3500
                },
                {
                    text: 'campPage.projectsContent.tabernacle.requests.tents',
                    money: 2500
                }
            ],
            mainPhoto: 'https://camp-bethel.s3.amazonaws.com/projects/tabernacle/Tabernacle_0.jpg',
            photos: [],
            needMoney: 6000,
            haveMoney: 0
        },
        {
            id: 1,
            name: 'campPage.projectsContent.diningBuilding.title',
            description: 'campPage.projectsContent.diningBuilding.description',
            requestIntro: 'campPage.projectsContent.diningBuilding.requestIntro',
            requests: [
                {
                    text: 'campPage.projectsContent.diningBuilding.requests.roof',
                    money: 5000
                },
                {
                    text: 'campPage.projectsContent.diningBuilding.requests.facade',
                    money: 3000
                }
            ],
            mainPhoto: 'https://camp-bethel.s3.amazonaws.com/projects/dinning-building/DinningBuilding_0.jpg',
            photos: [],
            needMoney: 8000,
            haveMoney: 0
        }
    ]

    constructor() { }

    ngOnInit(): void { }

}
