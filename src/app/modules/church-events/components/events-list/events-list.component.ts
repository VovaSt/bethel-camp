import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/core/services/calendar.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
    monthCounter: number = 0;
    title: string = this.calendarService.getMonthLabel();
    monthDays: any[] = this.calendarService.getEachDayOfMonth();

    constructor(
        private calendarService: CalendarService
    ) { }

    ngOnInit(): void {

    }

    getPreviosMonth() {
        this.monthCounter--;
        this.updateData();
    }

    getNextMonth() {
        this.monthCounter++;
        this.updateData();
    }

    updateData() {
        this.title = this.calendarService.getMonthLabel(this.monthCounter);
        this.monthDays = this.calendarService.getEachDayOfMonth(this.monthCounter);
    }
}
