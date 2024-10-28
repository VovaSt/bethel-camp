import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CalendarService, typeFilters } from 'src/app/core/services/calendar.service';
import { CalendarEventData } from 'src/app/core/types/calendar.type';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
    @Input() data: CalendarEventData | null;

    eventForm: FormGroup;
    types: Object[] = [...typeFilters];
    places: string[];
    filteredPlaces$: Observable<string[]>;

    constructor(
        private formBuilder: FormBuilder,
        private calendarService: CalendarService
    ) {}

    ngOnInit(): void {
        this.eventForm = this.formBuilder.group({
            type: [(this.data?.type || ''), Validators.required],
            name: [(this.data?.name || ''), Validators.required],
            start: [(this.data?.start || ''), Validators.required],
            finish: [(this.data?.finish || '')],
            place: [(this.data?.finish || '')],
            person: [(this.data?.finish || '')],
            preachers: [(this.data?.finish || [])],
            singers: [(this.data?.finish || [])],
            cars: [(this.data?.finish || [])],
            frequency: [(this.data?.frequency || "once"), Validators.required],
            date: [(this.data?.date || undefined), Validators.required],
            days: [(this.data?.days || [])],
        });

        this.places = this.calendarService.getPlaces();

        this.filteredPlaces$ = this.eventForm.get("place").valueChanges.pipe(
            startWith(''),
            map(value => {
                const filterValue = value.toLowerCase();
                return this.places.filter(p => p.toLowerCase().indexOf(filterValue) === 0);
            })
        );
    }

    onSubmitForm() {

    }
}
