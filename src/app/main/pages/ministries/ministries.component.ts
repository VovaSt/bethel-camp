import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinistriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
