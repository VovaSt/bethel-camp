import { Component, OnInit } from '@angular/core';
import { CalendarEventColor, CalendarEventType } from 'src/app/core/enums/calendar.enum';
import { CalendarService, calendarData } from 'src/app/core/services/calendar.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
    monthCounter: number = 0;
    title: string = "";
    monthDays: any[] = [];
    today: string = "";
    data: Object = {};
    showSettings = false;
    showTypes = [
        { label: "загальне служіння", type: CalendarEventType.загальне_служіння, show: true },
        { label: "молитва", type: CalendarEventType.молитва, show: true },
        { label: "домашня група", type: CalendarEventType.домашня_група, show: true },
        { label: "недільна школа", type: CalendarEventType.недільна_школа, show: true },
        { label: "молодіжне", type: CalendarEventType.молодіжне, show: true },
        { label: "євангелізація", type: CalendarEventType.євангелізація, show: true },
        { label: "табір", type: CalendarEventType.табір, show: true },
        { label: "хор", type: CalendarEventType.хор, show: true }
    ]
    showAllTypes = true;

    constructor(
        private calendarService: CalendarService
    ) {
        this.title = this.calendarService.getMonthLabel();
        this.monthDays = this.calendarService.getEachDayOfMonth();
        this.today = this.calendarService.formatDataId(new Date());
        this.data = calendarData;
    }

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

    getEventColor(event) {
        return CalendarEventColor[event.type];
    }

    checkTypes(type) {
        const index = this.showTypes.findIndex((item) => item.type === type);
        this.showTypes[index].show === !this.showTypes[index].show;
        this.showAllTypes = this.showTypes.every((item) => item.show);
    }
}
