import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './donate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonateComponent implements OnInit {

  privatUrl = environment.private24Url;

  constructor() { }

  ngOnInit(): void {
  }

}
