import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/core/enums/language.enum';
import { LanguageService } from 'src/app/core/services/language.service';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';
import { Ministers } from './ministers.map';

@Component({
  selector: 'app-ministers',
  templateUrl: './ministers.component.html',
  styleUrls: ['./ministers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinistersComponent implements OnInit {

  ministers = Ministers;
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
