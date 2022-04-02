import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  showHardLoader$: Observable<boolean>;
  showLightLoader$: Observable<boolean>;

  constructor(private loaderService: LoaderService) { 
      this.showHardLoader$ = this.loaderService.hardLoaderCount$
        .pipe(map(count => count > 0));

      this.showLightLoader$ = this.loaderService.lightLoaderCount$
        .pipe(map(count => count > 0));
  }
}
