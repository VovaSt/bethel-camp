import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectData } from '../../models/project-data.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectPageComponent implements OnInit {

    project: ProjectData;

    constructor(
        private projectsService: ProjectsService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const project = this.route.snapshot.queryParams.project;
        if (!project) {
            this.router.navigate(['camp']);
        } else {
            this.project = this.projectsService.getProjectById(project);
        }
    }

}
