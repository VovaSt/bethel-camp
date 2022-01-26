export class ProjectData {
    id: number;
    name: string;
    description: string;
    requestIntro: string;
    requests: ProjectRequest[];
    mainPhoto: string;
    photos: string[];
    needMoney: number;
    haveMoney: number;
}

export class ProjectRequest {
    text: string;
    money: number;
}
