import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CalendarService, typeFilters } from 'src/app/core/services/calendar.service';
import { CalendarEventData } from 'src/app/core/types/calendar.type';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    addItemToChipsHandler,
    filterItemsForChips,
    filterPlaces,
    removeItemFromChipsHandler,
    selectedItemInChipsHandler
} from './utils';
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
    separatorKeysCodes: number[] = [ENTER, COMMA];

    places: string[];
    filteredPlaces$: Observable<string[]>;

    preachers: string[];
    preachersInputCtrl = new FormControl();
    filteredPreachers$: Observable<string[]>;

    singers: string[];
    singersInputCtrl = new FormControl();
    filteredSingers$: Observable<string[]>;

    cars: string[];
    carsInputCtrl = new FormControl();
    filteredCars$: Observable<string[]>;

    @ViewChild('preacherInput') preacherInput: ElementRef<HTMLInputElement>;
    @ViewChild('singerInput') singerInput: ElementRef<HTMLInputElement>;
    @ViewChild('carInput') carInput: ElementRef<HTMLInputElement>;

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
        this.singers = this.calendarService.getSingers();
        this.cars = this.calendarService.getCars();

        this.filteredPlaces$ = this.eventForm.get("place").valueChanges.pipe(
            startWith(''),
            map(value => filterPlaces(value, this.places))
        );

        this.filteredPreachers$ = this.preachersInputCtrl.valueChanges.pipe(
            startWith(''),
            map(item => filterItemsForChips(item, this.preachers, this.eventForm, "preachers"))
        );

        this.filteredSingers$ = this.singersInputCtrl.valueChanges.pipe(
            startWith(''),
            map(item => filterItemsForChips(item, this.singers, this.eventForm, "singers"))
        );

        this.filteredCars$ = this.carsInputCtrl.valueChanges.pipe(
            startWith(''),
            map(item => filterItemsForChips(item, this.cars, this.eventForm, "cars"))
        );
    }

    private getVarsByProperty(property) {
        let inputCtrl;
        let input;

        switch (property) {
            case "preachers":
                inputCtrl = this.preachersInputCtrl;
                input = this.preacherInput;
                break;
            case "singers":
                inputCtrl = this.singersInputCtrl;
                input = this.singerInput;
                break;
            case "cars":
                inputCtrl = this.carsInputCtrl;
                input = this.carInput;
                break;
            default:
                break;
        }

        if (inputCtrl && input) return { inputCtrl, input };
        return null;
    }

    addItemToChips(event: MatChipInputEvent, property: string): void {
        const vars = this.getVarsByProperty(property);
        addItemToChipsHandler(event, this.eventForm, vars.inputCtrl, property);
    }

    selectedItemInChips(event: MatAutocompleteSelectedEvent, property: string): void {
        const vars = this.getVarsByProperty(property);
        selectedItemInChipsHandler(event, this.eventForm, vars.input, vars.inputCtrl, property);
    }

    removeItemFromChips(preacher: string, property: string) {
        const vars = this.getVarsByProperty(property);
        removeItemFromChipsHandler(preacher, this.eventForm, vars.inputCtrl, property);
    }

    onSubmitForm() {

    }
}
