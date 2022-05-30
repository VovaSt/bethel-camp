import { Component } from '@angular/core';
import { Language } from 'src/app/core/enums/language.enum';
import { LanguageService } from 'src/app/core/services/language.service';
import { environment } from './../../../../environments/environment';

@Component({
    selector: 'app-donate-modal',
    templateUrl: './donate-modal.component.html',
    styleUrls: ['./donate-modal.component.scss']
})
export class DonateModalComponent {

    privatUrl = environment.private24Url;
    organization = environment.bankAccount.organization;
    IBAN = environment.bankAccount.IBAN;
    USREOU = environment.bankAccount.USREOU;

    isAbroad = false;

    constructor(private languageService: LanguageService) {
        this.isAbroad = this.languageService.getLanguage() !== Language.ua;
    }

}
