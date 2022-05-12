import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
    selector: 'app-church-history',
    templateUrl: './church-history.component.html',
    styleUrls: ['./church-history.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChurchHistoryComponent implements OnInit, AfterViewInit, OnDestroy {

    years = [ '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020' ];
    yearsPosition = {};
    currentYear = '1920';
    scrollContainer;

    @ViewChild('historyContainer') historyContainer: ElementRef;
    @ViewChild('yearsContainer') yearsContainer: ElementRef;

    isDesktop = window.innerWidth > 800;
    subscription: Subscription[] = [];

    constructor(
        private modulesManager: ModulesManagerService,
        private cdr: ChangeDetectorRef,
        private loaderService: LoaderService
    ) { }

    ngOnInit(): void {
        this.modulesManager.setActiveModule(null);
        this.hideFooter(true);
    }

    ngAfterViewInit() {
        this.subscription.push(
            this.loaderService.hardLoaderCount$
                .pipe(filter(v => v === 0))
                .subscribe(() => this.setScrollConfig())
        );
    }

    photoUrl(i: string) {
        return `https://camp-bethel.s3.amazonaws.com/church-history/${i}.jpg`;
    } 

    photoLabel(i: string) {
        return `churchHistory.${i}.photoLabel`;
    } 

    public scrollTo(id: string) {
        this.scrollContainer.scrollTo({
            top: this.yearsPosition[id], 
            behavior: 'smooth'
        });
    }

    private setScrollConfig() {
      this.scrollContainer = this.isDesktop ? this.historyContainer.nativeElement : window;
      this.setYearsPosition();

      fromEvent(this.scrollContainer, 'scroll')
          .pipe(debounceTime(100))
          .subscribe(() => {
              const scrollTop = this.isDesktop ? 
                  this.historyContainer.nativeElement.scrollTop : window.scrollY;
              this.onScroll(scrollTop);
          });
    }

    private setYearsPosition() {
        this.years.forEach(year => {
            const element = document.getElementById(year);
            if (element) {
                let position;
                if (this.isDesktop) {
                    const scale = element.getBoundingClientRect().width / element.offsetWidth;
                    const w = this.scrollContainer.clientHeight;
                    position = element.offsetTop - (w - w * scale / 1.4);
                    position = position > 0 ? position : 0;
                } else {
                    position = element.offsetTop > 200 ? element.offsetTop - 70 : 0;
                }
                this.yearsPosition[year] = position;
            }
        });
    }

    private onScroll(scrollTop: number) {
        const fromTop = scrollTop + 100;
        let diff, currYear;

        Object.entries(this.yearsPosition).forEach(data => {
            const [year, topPos] = data; 
            if (topPos <= fromTop) {
                const _diff = Math.abs(+topPos - fromTop)
                if (!diff || diff > _diff) {
                    diff = _diff;
                    currYear = year;
                }
            }
        });
        
        if (this.currentYear !== currYear) {
            this.currentYear = currYear;
            this.scrollYearsBlock();
            this.cdr.detectChanges();
        }
    }

    private hideFooter(hide: boolean) {
        const displayValue = hide ? 'none' : 'initial';
        document.getElementsByTagName('footer')[0].style.display = displayValue;
    }

    private scrollYearsBlock() {
        const yearWidth = 69.5;
        const yearPos = yearWidth * this.years.indexOf(this.currentYear);
        const gap = window.innerWidth / 2 - 54; 
        const scroll = yearPos - gap;
        this.yearsContainer.nativeElement.scrollTo({
            left: scroll > 0 ? scroll : 0, 
            behavior: 'smooth'
        });
    }

    ngOnDestroy(): void {
        this.hideFooter(false);
        this.subscription.forEach(s => s.unsubscribe());
    }
}
