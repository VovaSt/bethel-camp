import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CalendarService, typeFilters } from 'src/app/core/services/calendar.service';
import { CalendarEventData } from 'src/app/core/types/calendar.type';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { addPreacherHandler, filterPlaces, filterPreachers, removePreacherHandler, selectedPreacherHandler } from './utils';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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

    preachers: string[];
    preachersInputCtrl = new FormControl();
    filteredPreachers$: Observable<string[]>;
    separatorKeysCodes: number[] = [ENTER, COMMA];

    @ViewChild('preacherInput') preacherInput: ElementRef<HTMLInputElement>;

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
            place: [(this.data?.place || '')],
            person: [(this.data?.person || '')],
            preachers: [(this.data?.preachers || [])],
            singers: [(this.data?.singers || [])],
            cars: [(this.data?.cars || [])],
            frequency: [(this.data?.frequency || "once"), Validators.required],
            date: [(this.data?.date || undefined), Validators.required],
            days: [(this.data?.days || [])],
        });

        this.places = this.calendarService.getPlaces();
        this.preachers = this.calendarService.getPreachers();

        this.filteredPlaces$ = this.eventForm.get("place").valueChanges.pipe(
            startWith(''),
            map(value => filterPlaces(value, this.places))
        );

        this.filteredPreachers$ = this.preachersInputCtrl.valueChanges.pipe(
            startWith(''),
            map(preacher => filterPreachers(preacher, this.preachers, this.eventForm))
        );
    }

    addPreacher(event: MatChipInputEvent): void {
        addPreacherHandler(event, this.eventForm, this.preachersInputCtrl);
    }

    selectedPreacher(event: MatAutocompleteSelectedEvent): void {
        selectedPreacherHandler(event, this.eventForm, this.preacherInput, this.preachersInputCtrl);
    }

    removePreacher(preacher: string) {
        removePreacherHandler(preacher, this.eventForm);
    }

    onSubmitForm() {

    }
}
