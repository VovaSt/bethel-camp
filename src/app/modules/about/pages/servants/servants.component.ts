import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/core/enums/language.enum';
import { LanguageService } from 'src/app/core/services/language.service';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';
import { Servants } from './servants.map';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
  styleUrls: ['./servants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServantsComponent implements OnInit {

  servants = Servants;
  lang$: Observable<Language>;
  languages = Language;

  constructor(
    private modulesManager: ModulesManagerService,
    private languageService: LanguageService
    ) {}

  ngOnInit(): void {
      this.modulesManager.setActiveModule(null);
      this.lang$ = this.languageService.getLanguageObs();
  }
}
