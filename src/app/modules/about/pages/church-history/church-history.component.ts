import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
  selector: 'app-church-history',
  templateUrl: './church-history.component.html',
  styleUrls: ['./church-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChurchHistoryComponent implements OnInit {

  constructor(private modulesManager: ModulesManagerService) {}

  ngOnInit(): void {
      this.modulesManager.setActiveModule(null);
  }

}
