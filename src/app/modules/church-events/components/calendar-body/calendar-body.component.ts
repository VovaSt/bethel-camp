import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarEventColor, CalendarEventType } from 'src/app/core/enums/calendar.enum';
import { CalendarService, calendarData } from 'src/app/core/services/calendar.service';
import { CalendarCell, CalendarEvents, CalendarEventTypeCheckbox } from 'src/app/core/types/calendar.type';


@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarBodyComponent implements OnInit {
    today: string = "";
    weekCounter: number = 0;
    calendarCells$: Observable<CalendarCell[]>;
    eventsData$: Observable<CalendarEvents>;
    typeFilter$: Observable<CalendarEventTypeCheckbox[]>;

    constructor(
        private calendarService: CalendarService
    ) {
    }

    ngOnInit(): void {
        this.today = this.calendarService.formatDataId(new Date());
        this.calendarCells$ = this.calendarService.calendarCells$;

        this.eventsData$ = combineLatest([
            this.calendarService.eventsData$,
            this.calendarService.typeFilter$
        ]).pipe(map(([eventsData, types]) => {
            const data = JSON.parse(JSON.stringify(eventsData));
            for (let day in data) {
                data[day] = data[day].filter((event) => {
                    const typeItem = types.find((item) => item.type === event.type);
                    if (typeItem) return typeItem.show;
                    return false;
                });
            }
            return data;
        }));
    }
}
