import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectData } from '../../models/project-data.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

    projects: ProjectData[] = [];

    constructor(
        private projectsService: ProjectsService
    ) { }

    ngOnInit(): void {
        this.projects = this.projectsService.getAllProjects();
    }

}
