import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
  selector: 'app-confession',
  templateUrl: './confession.component.html',
  styleUrls: ['./confession.component.scss']
})
export class ConfessionComponent implements OnInit {

  constructor(private modulesManager: ModulesManagerService) { }

  ngOnInit(): void { 
    this.modulesManager.setActiveModule(null);
  }

}
