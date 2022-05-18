import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from './../../../../core/services/module-manager.service';

@Component({
  selector: 'app-church-events',
  templateUrl: './church-events.component.html',
  styleUrls: ['./church-events.component.scss']
})
export class ChurchEventsComponent implements OnInit {

    constructor(
        private modulesManager: ModulesManagerService,
    ) { }

    ngOnInit(): void {
        this.modulesManager.setActiveModule('');
    }

}
