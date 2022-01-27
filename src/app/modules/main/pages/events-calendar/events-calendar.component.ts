import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './events-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
