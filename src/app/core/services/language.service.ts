import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../enums/language.enum';

@Injectable()
export class LanguageService {

    private _lang$: BehaviorSubject<Language> = new BehaviorSubject<Language>(null);

    constructor(private translateService: TranslateService) { }

    public setDefaultLang() {
        // const browserLang = this.translateService.getBrowserLang();
        // const available = Object.values(Language).find(i => browserLang as Language == i);
        // let lang = available ? browserLang as Language : Language.ua;
        
        // if (lang === Language.ru) {
        //     lang = Language.ua;
        // } 

        this.setLanguage(Language.ua);
    }

    public setLanguage(language: Language) {
        this.translateService.use(language);
        this._lang$.next(language);
    }

    public getLanguageObs() {
        return this._lang$.asObservable();
    }

    public getLanguage() {
        return this._lang$.value;
    }
}
