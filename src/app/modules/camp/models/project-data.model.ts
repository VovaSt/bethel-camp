export class ProjectData {
    id: string;
    name: string;
    description: string;
    requestIntro: string;
    requests: ProjectRequest[];
    mainPhoto: string;
    photos: object[];
    needMoney: number;
    haveMoney: number;
}

export class ProjectRequest {
    text: string;
    money: number;
}
