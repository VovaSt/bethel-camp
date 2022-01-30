import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    constructor(
        private modulesManager: ModulesManagerService,
    ) { }

    ngOnInit(): void {
        this.modulesManager.setActiveModule('main');
    }

}
