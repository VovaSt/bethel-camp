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

  showLoader$: Observable<boolean>;

  constructor(private loaderService: LoaderService) { 
      this.showLoader$ = this.loaderService.loaderCount$
        .pipe(map(count => count > 0));
  }
}
