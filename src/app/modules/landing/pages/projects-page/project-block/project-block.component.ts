import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectData } from 'src/app/models/project-data.model';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-project-block',
    templateUrl: './project-block.component.html',
    styleUrls: ['./project-block.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectBlockComponent implements OnInit {

    @Input() project: ProjectData;

    private _progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public progress$ = this._progress$.asObservable().pipe(debounceTime(1000));

    constructor() { }

    ngOnInit(): void {
        const progress = (this.project.haveMoney / this.project.needMoney) * 100;
        this._progress$.next(progress);
    }
}

