import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
  selector: 'app-war-page',
  templateUrl: './war-page.component.html',
  styleUrls: ['./war-page.component.scss']
})
export class WarPageComponent implements OnInit {

    refugeesShelterImages = [
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/refugees-shelter/1.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/refugees-shelter/2.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/refugees-shelter/3.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/refugees-shelter/4.jpg' }
    ];

    helpFromAbroadImages = [
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/help-from-abroad/1.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/help-from-abroad/2.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/help-from-abroad/3.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/help-from-abroad/4.jpg' },
      { path: 'https://camp-bethel.s3.amazonaws.com/war-2022/help-from-abroad/5.jpg' }
    ];

    video = 'https://camp-bethel.s3.amazonaws.com/war-2022/volunteers.mp4';

    constructor(private modulesManager: ModulesManagerService) {}

    ngOnInit(): void {
        this.modulesManager.setActiveModule(null);
    }
}
