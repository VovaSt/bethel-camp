import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './donate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
