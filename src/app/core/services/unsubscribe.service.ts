import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class UnsubscribeService implements OnDestroy {
  private subscription = new Subscription();

  public set subs(sub: Subscription) {
    this.subscription.add(sub);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
