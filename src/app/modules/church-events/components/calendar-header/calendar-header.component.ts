import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/core/services/calendar.service';


@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeaderComponent implements OnInit {
    weekCounter: number = 0;
    title: string = "";
    toolbarIsShown$: Observable<boolean>;

    constructor(
        private calendarService: CalendarService
    ) {
        this.title = this.calendarService.getWeekLabel();
        this.toolbarIsShown$ = this.calendarService.toolbarIsShown$;
    }

    ngOnInit(): void {

    }

    getPreviosWeek() {
        this.weekCounter--;
        this.updateData();
    }

    getNextWeek() {
        this.weekCounter++;
        this.updateData();
    }

    updateData() {
        this.title = this.calendarService.getWeekLabel(this.weekCounter);
        this.calendarService.changeWeek(this.weekCounter);
    }

    toggleToolbar() {
        this.calendarService.toogleToolbar();
    }
}
