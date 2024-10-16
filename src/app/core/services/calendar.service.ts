import { Injectable } from '@angular/core';
import addMonths from 'date-fns/addMonths';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfMonth from 'date-fns/startOfMonth';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

    constructor(

    ) {}

    getMonthLabel(monthCount: number = 0) {
        const date: Date = addMonths(new Date(), monthCount);
        const formatter = new Intl.DateTimeFormat(
            "ua",
            { month: "long", year: "numeric" }
        );
        const label = formatter.format(date);
        return label.charAt(0).toUpperCase() + label.slice(1);
    }

    getEachDayOfMonth(monthCount: number = 0) {
        const date: Date = addMonths(new Date(), monthCount);
        const formatter = new Intl.DateTimeFormat("ua", { weekday: "short" });
        const firstDay = startOfMonth(date);
        const lastDay = lastDayOfMonth(date);
        return eachDayOfInterval({ start: firstDay, end: lastDay })
            .map((date) => {
                return { date, nameOfDay: formatter.format(date) }
            });
    }
}
