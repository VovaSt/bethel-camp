import { Directive, ElementRef } from "@angular/core";
import { LoaderService } from "src/app/core/services/loader.service";

@Directive({ 
    selector: '[appImageLoader]' 
})
export class ImageLoaderDirective {
    constructor(
        private el: ElementRef,
        private loaderService: LoaderService
    ) {
        this.loaderService.increaseLoaderCount();
    }
  
    ngAfterViewInit() {
        const img = new Image();
        const bgStyle = getComputedStyle(this.el.nativeElement).backgroundImage;
        const url = bgStyle.split('url')[1];
        const src = url.replace('(','').replace(')','').replace(/\"/gi, "");
        img.src = src;
        img.addEventListener('load', () => this.loaderService.decreaseLoaderCount());
        img.addEventListener('error', () => this.loaderService.decreaseLoaderCount());
    }
}