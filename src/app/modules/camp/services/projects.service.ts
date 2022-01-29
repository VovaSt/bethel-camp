import { Injectable } from "@angular/core";
import { ProjectData } from "../models/project-data.model";

@Injectable()
export class ProjectsService {

    private projects: ProjectData[] = [
        {
            id: 'tabernacle',
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
            photos: [
                { path: 'https://camp-bethel.s3.amazonaws.com/projects/tabernacle/Tabernacle_0.jpg' }
            ],
            needMoney: 6000,
            haveMoney: 0
        },
        {
            id: 'dining-building',
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
            photos: [
                { path: 'https://camp-bethel.s3.amazonaws.com/projects/dinning-building/DinningBuilding_0.jpg' }
            ],
            needMoney: 8000,
            haveMoney: 0
        }
    ];

    getAllProjects(): ProjectData[] {
        return this.projects;
    }

    getProjectById(id: string) {
        return this.projects.find(p => p.id === id);
    }
}
