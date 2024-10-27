import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEventData } from 'src/app/core/types/calendar.type';

@Component({
  selector: 'app-event-form-dialog',
  templateUrl: './event-form-dialog.component.html',
  styleUrls: ['./event-form-dialog.component.scss']
})
export class EventFormDialogComponent implements OnInit {
    title: string;

    constructor(
      @Inject(MAT_DIALOG_DATA) public data: CalendarEventData | null
    ) {}

    ngOnInit(): void {
        this.title = `${this.data ? "Редагування" : "Створення"} події`;
    }

    save() {

    }

    cancel() {

    }
}
