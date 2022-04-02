import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
  selector: 'app-page-under-development',
  templateUrl: './page-under-development.component.html',
  styleUrls: ['./page-under-development.component.scss']
})
export class PageUnderDevelopmentComponent implements OnInit {

  constructor(private modulesManager: ModulesManagerService) {}

  ngOnInit(): void {
      this.modulesManager.setActiveModule(null);
  }

}
