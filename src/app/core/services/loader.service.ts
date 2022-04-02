import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _loaderCount = new BehaviorSubject<number>(0);
    public loaderCount$ = this._loaderCount.asObservable();
  
    increaseLoaderCount() {
        const currentValue = this._loaderCount.value;
        this._loaderCount.next(currentValue + 1);
    } 

    decreaseLoaderCount() {
        const currentValue = this._loaderCount.value;
        if (currentValue > 0) {
            this._loaderCount.next(currentValue - 1);
        }
    }
  }