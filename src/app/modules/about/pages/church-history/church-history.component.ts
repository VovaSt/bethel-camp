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

  years = [ '1920', '1930', '1940', '1950' ];

  ngOnInit(): void {
      this.modulesManager.setActiveModule(null);
  }

  photoUrl(i: string) {
    return `https://camp-bethel.s3.amazonaws.com/church-history/${i}.jpg`;
  } 

  photoLabel(i: string) {
    return `churchHistory.${i}.photoLabel`;
  } 

}
