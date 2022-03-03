import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(private modulesManager: ModulesManagerService) {}

  ngOnInit(): void {
      this.modulesManager.setActiveModule(null);
  }

}
