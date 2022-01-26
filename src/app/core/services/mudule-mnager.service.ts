import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modules } from '../enums/modules.enum';

@Injectable({
  providedIn: 'root'
})
export class ModulesManagerService {
  readonly modules = Modules;
  private activeModule$: BehaviorSubject<Modules> = new BehaviorSubject<Modules>(this.modules.default);
  getActiveModule$: Observable<Modules> = this.activeModule$.asObservable();

  setActiveModule(module: Modules | string) {
    this.activeModule$.next(module as Modules);
  }

  getActiveModule(): Modules {
    return this.activeModule$.value;
  }
}
