import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { typeFilters } from 'src/app/core/services/calendar.service';
import { CalendarEventData } from 'src/app/core/types/calendar.type';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
    @Input() data: CalendarEventData | null;

    eventForm: FormGroup;
    types = [...typeFilters];

    constructor(
        private formBuilder: FormBuilder
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
            date: [(this.data?.date || undefined), Validators.required],
        });
    }

    onSubmitForm() {

    }
}
