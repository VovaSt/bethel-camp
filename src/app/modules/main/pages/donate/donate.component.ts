import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DonateModalComponent } from './../../../../shared/components/donate-modal/donate-modal.component';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './donate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonateComponent {

  constructor(public dialog: MatDialog) {}

  donate() {
    this.dialog.open(DonateModalComponent, { maxWidth: '94vw'});
  }
}
