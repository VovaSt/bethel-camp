import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
import { YoutubeService } from 'src/app/core/services/youtube.service';
import { VideoPopupComponent } from 'src/app/shared/components/video-popup/video-popup.component';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['../about-us/about-us.component.scss', './broadcast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastComponent implements OnInit {

  constructor(
    private youtubeService: YoutubeService,
    private loaderService: LoaderService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  showLastBroadcast() {
      this.loaderService.increaseLightLoaderCount();
      this.youtubeService.getLastVideo()
        .pipe(tap(() => this.loaderService.decreaseLightLoaderCount()))
        .subscribe((data: any) => {
          this.dialog.open(VideoPopupComponent, { 
            data: data?.items[0],
            maxWidth: '94vw',
            width: '800px',
            autoFocus: false
          });
        });
  }
}
