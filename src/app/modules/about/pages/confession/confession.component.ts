import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';
import { Topics } from './topics.map';

@Component({
    selector: 'app-confession',
    templateUrl: './confession.component.html',
    styleUrls: ['./confession.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfessionComponent implements OnInit {
    topics = Topics;

    topicKeys = Object.keys(this.topics);

    constructor(private modulesManager: ModulesManagerService) {}

    ngOnInit(): void {
        this.modulesManager.setActiveModule(null);
    }
}
