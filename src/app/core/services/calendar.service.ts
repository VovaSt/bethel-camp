import { Injectable } from '@angular/core';
import addMonths from 'date-fns/addMonths';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfMonth from 'date-fns/startOfMonth';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import format from 'date-fns/format';
import { CalendarEventType } from '../enums/calendar.enum';
import addWeeks from 'date-fns/addWeeks';
import startOfWeek from 'date-fns/startOfWeek';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';

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

    getWeekLabel(weekCount: number = 0) {
        const date: Date = addWeeks(new Date(), weekCount);
        const formatter = new Intl.DateTimeFormat(
            "ua",
            { day: "numeric", month: "short", year: "numeric" }
        );
        const firstDay = startOfWeek(date, { weekStartsOn: 1 });
        const lastDay = lastDayOfWeek(date, { weekStartsOn: 1 });
        return `
            ${formatter.format(firstDay)}
            &#8211;
            ${formatter.format(lastDay)}
        `;
    }

    getEachDayOfMonth(monthCount: number = 0) {
        const date: Date = addMonths(new Date(), monthCount);
        const formatter = new Intl.DateTimeFormat("ua", { weekday: "short" });
        const firstDay = startOfMonth(date);
        const lastDay = lastDayOfMonth(date);

        return eachDayOfInterval({ start: firstDay, end: lastDay })
            .map((date) => ({
                id: this.formatDataId(date),
                date,
                nameOfDay: formatter.format(date),
            }));
    }

    getEachDayOfWeek(weekCount: number = 0) {
        const date: Date = addWeeks(new Date(), weekCount);
        const formatter = new Intl.DateTimeFormat("ua", { weekday: "short" });
        const firstDay = startOfWeek(date, { weekStartsOn: 1 });
        const lastDay = lastDayOfWeek(date, { weekStartsOn: 1 });

        return eachDayOfInterval({ start: firstDay, end: lastDay })
            .map((date) => ({
                id: this.formatDataId(date),
                date,
                nameOfDay: formatter.format(date),
            }));
    }

    formatDataId(date) {
        date = date || new Date();
        return format(date, 'dd-MM-yyyy');
    }
}


export const calendarData = {
    "07-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Репетиція старшого хору",
            start: "17:30",
            finish: "19:00",
            type: CalendarEventType.хор,
            place: "Хорова кімната",
            person: "Грабовський Юрій, Каленська Олена"
        },
        {
            name: "Молитва для молодих сімей",
            start: "20:00",
            finish: "21:00",
            type: CalendarEventType.молитва,
            place: "Балкон"
        }
    ],
    "08-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал",
        },
        {
            name: "Домашня група",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.домашня_група,
            place: "Район Молокозаводу",
            person: "Редич Дмитро"
        },
        {
            name: "Молодіжна молитва",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.молодіжне,
            place: "Горниця",
            person: "Стахов Леонід"
        }
    ],
    "09-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Домашня група",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.домашня_група,
            place: "Район Центр",
            person: "Гусєв Олег"
        },
    ],
    "10-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Домашня група",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.домашня_група,
            place: "Район Загребелля",
            person: "Редич Дмитро"
        },
        {
            name: "Молодіжний розбір Писання",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.молодіжне,
            place: "Горниця",
            person: "Стахов Леонід"
        }
    ],
    "11-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Репетиція молодіжного хору",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.хор,
            place: "Хорова кімната",
            person: "Редич Ніна"
        },
    ],
    "12-10-2024": [
        {
            name: "Недільна школа (3-4 роки)",
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Клас № 1",
            person: "Хтось"
        },
        {
            name: "Недільна школа (5-6 років)",
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Клас № 2",
            person: "Хтось"
        },
        {
            name: "Недільна школа (7-9 років)",
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Клас № 3",
            person: "Хтось"
        },
        {
            name: 'Репетиція хору "Божі дзвіночки" (3-5 років)',
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Хорова кімната",
            person: "Редич Ніна"
        },
        {
            name: 'Репетиція хору "Божі колосочки" (7-10 років)',
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Хорова кімната",
            person: "Каленська Олена"
        },
        {
            name: "Репетиція підліткового хору (11-16 років)",
            start: "13:00",
            finish: "15:00",
            type: CalendarEventType.недільна_школа,
            place: "Хорова кімната",
            person: "Гусєва Ангеліна"
        },
        {
            name: "Молодше підліткове (10-12 років)",
            start: "13:00",
            finish: "14:30",
            type: CalendarEventType.недільна_школа,
            place: "Балкон",
            person: "Трачук Ольга"
        },
        {
            name: "Старше підліткове (13-16 років)",
            start: "15:00",
            finish: "17:00",
            type: CalendarEventType.недільна_школа,
            place: "Балкон",
            person: "Стахов Богдан"
        },
        {
            name: "Молодіжне служіння",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.молодіжне,
            place: "Балкон",
            person: "Стахов Леонід"
        }
    ],
    "13-10-2024": [
        {
            name: "Служіння",
            start: "10:00",
            finish: "12:30",
            type: CalendarEventType.загальне_служіння,
            preachers: ["Тимощук Іван", "Сокорчук Сергій", "Гніліцький Борис"],
            singers: ['"Дарунок з небес"']
        },
        {
            name: "Табір",
            start: "14:00",
            finish: "19:00",
            type: CalendarEventType.табір,
            place: "село Красівка",
            person: "Семерак Руслан",
            cars: ["VW Crafter", "Mercedes"]
        },
        {
            name: "Євангелізація",
            start: "15:00",
            finish: "16:30",
            type: CalendarEventType.євангелізація,
            place: "село Нізгурці",
            person: "Панасюк Володимир",
            cars: ["VW Caravella"]
        },
        {
            name: "Причастя",
            start: "17:00",
            finish: "19:00",
            type: CalendarEventType.загальне_служіння
        }
    ],
    "14-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Репетиція старшого хору",
            start: "17:30",
            finish: "19:00",
            type: CalendarEventType.хор,
            place: "Хорова кімната",
            person: "Грабовський Юрій, Каленська Олена"
        },
        {
            name: "Молитва для молодих сімей",
            start: "20:00",
            finish: "21:00",
            type: CalendarEventType.молитва,
            place: "Балкон"
        }
    ],
    "15-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал",
        },
        {
            name: "Домашня група",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.домашня_група,
            place: "Район Молокозаводу",
            person: "Редич Дмитро"
        },
        {
            name: "Молодіжна молитва",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.молодіжне,
            place: "Горниця",
            person: "Стахов Леонід"
        }
    ],
    "16-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Домашня група",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.домашня_група,
            place: "Район Центр",
            person: "Гусєв Олег"
        },
    ],
    "17-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Домашня група",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.домашня_група,
            place: "Район Загребелля",
            person: "Редич Дмитро"
        },
        {
            name: "Молодіжний розбір Писання",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.молодіжне,
            place: "Горниця",
            person: "Стахов Леонід"
        }
    ],
    "18-10-2024": [
        {
            name: "Загальноцерковна молитва",
            start: "9:00",
            finish: "10:00",
            type: CalendarEventType.молитва,
            place: "Головний зал"
        },
        {
            name: "Репетиція молодіжного хору",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.хор,
            place: "Хорова кімната",
            person: "Редич Ніна"
        },
    ],
    "19-10-2024": [
        {
            name: "Недільна школа (3-4 роки)",
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Клас № 1",
            person: "Хтось"
        },
        {
            name: "Недільна школа (5-6 років)",
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Клас № 2",
            person: "Хтось"
        },
        {
            name: "Недільна школа (7-9 років)",
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Клас № 3",
            person: "Хтось"
        },
        {
            name: 'Репетиція хору "Божі дзвіночки" (3-5 років)',
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Хорова кімната",
            person: "Редич Ніна"
        },
        {
            name: 'Репетиція хору "Божі колосочки" (7-10 років)',
            start: "12:00",
            finish: "13:00",
            type: CalendarEventType.недільна_школа,
            place: "Хорова кімната",
            person: "Каленська Олена"
        },
        {
            name: "Репетиція підліткового хору (11-16 років)",
            start: "13:00",
            finish: "15:00",
            type: CalendarEventType.недільна_школа,
            place: "Хорова кімната",
            person: "Гусєва Ангеліна"
        },
        {
            name: "Молодше підліткове (10-12 років)",
            start: "13:00",
            finish: "14:30",
            type: CalendarEventType.недільна_школа,
            place: "Балкон",
            person: "Трачук Ольга"
        },
        {
            name: "Старше підліткове (13-16 років)",
            start: "15:00",
            finish: "17:00",
            type: CalendarEventType.недільна_школа,
            place: "Балкон",
            person: "Стахов Богдан"
        },
        {
            name: "Молодіжне служіння",
            start: "19:00",
            finish: "21:00",
            type: CalendarEventType.молодіжне,
            place: "Балкон",
            person: "Стахов Леонід"
        }
    ],
    "20-10-2024": [
        {
            name: "Служіння",
            start: "10:00",
            finish: "12:30",
            type: CalendarEventType.загальне_служіння,
            preachers: ["Пудрівський Олександр", "Лукашук Яків", "Боцян Анатолій"],
            singers: ["Старший хор"]
        },
        {
            name: "Табір",
            start: "14:00",
            finish: "18:00",
            type: CalendarEventType.табір,
            place: "село Бистрик",
            person: "Семерак Руслан",
            cars: ["VW Crafter", "Mercedes"]
        },
        {
            name: "Євангелізація",
            start: "15:00",
            finish: "17:00",
            type: CalendarEventType.євангелізація,
            place: "село Никонівка",
            person: "Панасюк Володимир",
            cars: ["VW Caravella"]
        }
    ]
}
