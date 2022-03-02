import { Component, OnInit } from '@angular/core';
import { ModulesManagerService } from 'src/app/core/services/module-manager.service';

@Component({
    selector: 'app-confession',
    templateUrl: './confession.component.html',
    styleUrls: ['./confession.component.scss'],
})
export class ConfessionComponent implements OnInit {
    topics = {
        bible: {
            subject: 'confession.bible',
            pCount: 10,
        },
        God: {
            subject: 'confession.God',
            pCount: 4,
        },
        GodFather: {
            subject: 'confession.GodFather',
            pCount: 12,
        },
        GodSon: {
            subject: 'confession.GodSon',
            pCount: 14,
        },
        HolySpirit: {
            subject: 'confession.HolySpirit',
            pCount: 5,
        },
        angels: {
            subject: 'confession.angels',
            pCount: 4,
        },
        devil: {
            subject: 'confession.devil',
            pCount: 8,
        },
        human: {
            subject: 'confession.human',
            pCount: 8,
        },
        lifeOfHuman: {
            subject: 'confession.lifeOfHuman',
            pCount: 6,
        },
        sin: {
            subject: 'confession.sin',
            pCount: 4,
        },
        salvation: {
            subject: 'confession.salvation',
            pCount: 4,
        },
        baptismWithHolySpirit: {
            subject: 'confession.baptismWithHolySpirit',
            pCount: 17,
        },
        giftsOfHolySpirit: {
            subject: 'confession.giftsOfHolySpirit',
            pCount: 7,
        },
        ChurchOfChrist: {
            subject: 'confession.ChurchOfChrist',
            pCount: 12,
        },
        localChurch: {
            subject: 'confession.localChurch',
            pCount: 9,
        },
    };

    topicKeys = Object.keys(this.topics);

    constructor(private modulesManager: ModulesManagerService) {}

    ngOnInit(): void {
        this.modulesManager.setActiveModule(null);
    }
}
