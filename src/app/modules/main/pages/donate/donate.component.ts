import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './donate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonateComponent { }
