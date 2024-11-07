import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEventData } from 'src/app/core/types/calendar.type';
import { EventFormComponent } from '../event-form/event-form.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-event-form-dialog',
  templateUrl: './event-form-dialog.component.html',
  styleUrls: ['./event-form-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventFormDialogComponent implements OnInit, AfterViewInit {
    title: string;
    isDisabled$: Observable<boolean>;

    @ViewChild("form") formComponent: EventFormComponent;

    constructor(
      @Inject(MAT_DIALOG_DATA) public data: CalendarEventData | null
    ) {}

    ngOnInit(): void {
        this.title = `${this.data ? "Редагування" : "Створення"} події`;
    }

    ngAfterViewInit(): void {
        this.isDisabled$ = this.formComponent.eventForm.statusChanges.pipe(
            startWith("INVALID"),
            map(status => status === "INVALID")
        );
    }

    save() {
        console.log(this.formComponent.eventForm.value);
    }
}
