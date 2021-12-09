import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPageComponent implements OnInit {

    public images = [
        { path: 'https://lh3.googleusercontent.com/nU87QSmYLu8F4uuOvxtbNvTTU7DaDG17OAltYmcoZOvwsh5tCnr3p7LqXtO1gkXl-8k8PXKC5gc2svLJKy4PMApd85c7MSF4WBdW1TEBR3GT248iWL5giX04FDP6--_Mjk7kCGCH27bkkdaczMEmw_ORuB03BBCvrepMnvXotZLkhGVYTvKuaYnLPvMi3cF6Fg4e9J61FLIRnTmOmzpWwA20z0vM-N-OkgXwyU_8qphCPk9rJC_2o7ymY9iUN3BLBKxPaE-LMjt38yGANjxl-6nTtd_nLrlPW4BhTL5Wl3Iqe-bZzr3s1L5AazCYGfhHGxBq9Z3cFvkcMIjBr0y0o0Ffx_f3ay1cHcFaYFuHIHPxlS38yc1imz6kKUYHalx6W361ibvluuxJWa0BYzQR1QoJ4HY3wNPTrVIfk9fmcGbxcnPIM0C1CKXB7vNpq2DPNF1xT1Vf4Y6KR0X0UiUFQB2DlYGQdjJgcvO_wbZMlJ8WRkHYUgcHI4dUMjYsgz1fgFrGC-V22X-LUrVuMlsHhUisJb-HeiGBOFmtUrzuT-UTLKk293Y5Wf-onOaLiOQubHRNnA443-vpK0QzQFRNpd5N1Rygn57p4CVpCx11You4a2SspKddRxUxbDi_IHUbczc7U8LAKrrVxHCXgORhlLLH482dRrWAwqFftZ58QPYa3AJGryCy_1W8y0CZpTyCtSgv43xY_vXqSJiOOWTknBE=w1292-h970-no?authuser=0' },
        { path: 'https://lh3.googleusercontent.com/3F3dxWY7Scl8NTfq6D-UrRe1gf8TS3L35hZiSp1TQIsRMQdEFlnBfCf2UHRxBb5m-txP0T0CBXPaWMwewkDWnc-5z7qZC5spGS2xQ_0SKtFDd2I6Ap-jioRsPxgMEMClHsb-WGAM0D2nGD1N8DADCbCRhgk-A3lLMBu9FWS9B35oW7KgDZCP-6_8-brPIp5-FTLiXRXSxrBn3lJflp9JyRoRxdgv3sTLF_kQMBHS6UY0jePKqpL95z6O9IPk5el-3fyxBTmaAX2B1rmj3GPOBRMTAud2rbQ2BaWv51qkp6AqtaGRczoYIVLqbiFtleFm0YhmgUdK0uWl6n9IqG3i74bAgXHQsJrshkn_lFQtUiTlEZYh2_cG_VG5J8EtTQyxFKEHEfkzsmx5XTf5LaB1wejXGqOP0JC64iceN_z2sjWmrg8g9F8yiA00VKLNHKoT0lGNcsd-78CKYrkzlBNHmpsuAQQ0b_rWJGco0QXYk3EzbX3-bIyqCESTBEj5VmZCJGV6KoEXVSKO2XGQwKWnli1MYyXK1H0MG_jNocdxYEr8z28hWsjR1K9P6aXy0rX6C87tstBDtKMyORfqoSZKcIm3lg3Db6_Yra_b6X8TGyV-E3kZYtjlK7sXXhD6JUr01CyaTvIba44K9gZFx7DbriP4iCpmatLHSYF6Eyqwep-9LkdW8msK6cVkKSdVdFVFYhAQq-lui9IQaauRDCOWQP8=w1292-h970-no?authuser=0' },
        { path: 'https://lh3.googleusercontent.com/fm694qKjGMCOnPmhiW1Ro6irpeRWx65Zs10cmHl2_wyqVxCz8nHJptwvuo8ijupIcS49LdIqifkn3_aX46uLEmX75V-vjN_Ap4GQxv_e-2JXyjS976sGZdqzfOjfgn8S-WT9f0msQsakDMnHx6AolVp4hIsmku1UrBrfGYLCAqyEOvtYTiMKBAEk7Gr348wduqg23X5axMoT83RCzTCtbVsPVpxpua3av0nUr4Us2ypPO7UGX7OGhPOVAjPzmg4psz-wHE46v-zbyVd45YIHE25uWTDqE4gPMaimsNT9FgF28iiv9VINIJm-RACrG36y9NjENsgqMjiZJVbsAcUcKRgMyiOC-9OoskMLcAUIt44W99Zg16eAhdGSOgjLTAKPXLVPT191Fhk4Kys46i4K1gKdDj44WyaMhTPrZttnpzcn-BZAVqo49NPQmOqNmCRZ_z2Q7-xlPXqJSYTc-9SrgQXRuT1hg3tovdA12V7C4GvZ1lcP6wLOLdajS55QylSnU4ciXeB8jBTovhyiG9yxCavncX5bqHUGztp_eUlfpm3p5CDd4H3v-cjT-TqJzERoM4b210dxw59Q0iU5I7WxHy6fLPEJF9c1Oadc5n4ky--gptMNdcekvNzWa1gy9PEwPfqz7E3vR7rCo4TyY-MVd3q1saNKE1To791d01LzbcQyxYr7HBXKW8EkJRWMCl_K9QSjDxiA3AP6IaRGm9sJ8lk=w1292-h970-no?authuser=0' },
        { path: 'https://lh3.googleusercontent.com/Uf-1R1QEeChXvv0F811F--JJWUiLcGHQwRfRQEi6csrw7uuZ9dAe9G4R1jscsdnga2syaU4kcCP-uI94QHHKaq9J57v4J7IjH1dNRR2D66G1nW_2oJlQiSjvpGHRY_4UC7CavJqfXFh5S6NFDHjb5u9NqNS2VkLVnRn2HGH1wTAacFQsClOrZAg4BgVkZaZhPfwihZdt-LSfUjmebZ42s9t7wdTJuLB1Ow9sd2HrQ3LJNCB5HMt_qEXPbO_AJDsrD_Wfb7CVfq_bzs5yQRlfhYbBRqDfJKWS1kzyx5NsU2MuazcOLf1ff84Gry0I1m5OSAPMi9JfKX75QekKIGlXmFsX8TKfvOSpH6CztoSx10MGLQxY_VYGfF50YQzjdsOZABd--h6rjDidcd7jCzLEd6TItv-haTmjSldQVDnqzFHMyEawNCxj_IYv5HTsjlE5lRPG5AO8SBClj9xYnyXIiDLMLB5C8tYOvFPNND-zGL2T6ZCX8b553lqE56yovS13yfCE7mZ5JB8qA6r5PeR8awSDTLX1f-6zSGjWvlR6BDa--W4WCLtWP07BofAUCP8ZQnS-tA2eM8LyDQDl0cxex_rT8UIiCbCZXLs26pAQwsrTIi9h5BxfdL1IukgQG1hXS53zXqrp33w8GQgFpOt_lhYzjjyTjla0Fe6sCpyTgBVQr3dKggjKoBwF3OQ-aZOWNQV7aLN3U1UbCJ_Jw-pn8TQ=w1600-h901-no?authuser=0' },
    ];

    hideArrows$: Observable<boolean>;

    constructor() { }

    ngOnInit(): void {
        this.hideArrows$ = fromEvent(window, 'resize')
            .pipe(
                map(event => (event.target as Window).innerWidth > 1024),
                distinctUntilChanged(),
                startWith(window.innerWidth > 1024)
            );
    }

}
