import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './broadcast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
