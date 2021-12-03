import { Component, Input, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/models/project-data.model';

@Component({
    selector: 'app-project-block',
    templateUrl: './project-block.component.html',
    styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {

    @Input() project: ProjectData;

    constructor() { }

    ngOnInit(): void {
    }

}
