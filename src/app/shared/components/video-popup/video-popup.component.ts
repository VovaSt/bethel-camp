import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent implements OnInit {
    videoUrl: SafeResourceUrl;
    title: string;

    constructor(
      private sanitizer: DomSanitizer,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(): void {
        if (this.data) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://www.youtube.com/embed/${this.data.id.videoId}?rel=0&autoplay=0&showinfo=0`
            );
            this.title = this.data.snippet.title;
        }
    }
}
