import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _hardLoaderCount$ = new BehaviorSubject<number>(0);
    public hardLoaderCount$ = this._hardLoaderCount$.asObservable();
  
    private _lightLoaderCount$ = new BehaviorSubject<number>(0);
    public lightLoaderCount$ = this._lightLoaderCount$.asObservable();
    

    increaseHardLoaderCount() {
        const currentValue = this._hardLoaderCount$.value;
        this._hardLoaderCount$.next(currentValue + 1);
    } 

    increaseLightLoaderCount() {
        const currentValue = this._lightLoaderCount$.value;
        this._lightLoaderCount$.next(currentValue + 1);
    }

    decreaseHardLoaderCount() {
        const currentValue = this._hardLoaderCount$.value;
        if (currentValue > 0) {
            this._hardLoaderCount$.next(currentValue - 1);
        }
    } 
        
    decreaseLightLoaderCount() {
        const currentValue = this._lightLoaderCount$.value;
        if (currentValue > 0) {
            this._lightLoaderCount$.next(currentValue - 1);
        }
    }
  }