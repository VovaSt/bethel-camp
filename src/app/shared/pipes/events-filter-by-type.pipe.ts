import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'eventsFilterByType'})
export class EventsFilterByTypePipe implements PipeTransform {

    transform(items: any, types: any[]): any[] {
        if (items) {
            return items.filter((event) => {
                const typeItem = types.find((item) => item.type === event.type);
                return typeItem.show;
            });
        }
        return [];
    }
}
