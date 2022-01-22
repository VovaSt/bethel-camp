import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
