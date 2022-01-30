import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from '../../../../core/services/module-manager.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    constructor(
        private modulesManager: ModulesManagerService,
    ) { }

    ngOnInit(): void {
        this.modulesManager.setActiveModule('camp');
    }
}
