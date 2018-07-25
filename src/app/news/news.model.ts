import { Injectable } from '@angular/core';

@Injectable()
export class UserViewModel {

    UserId: string;
    UserName: string;
    LoginName: string;
    LoginToken: string;
    Mobile: string;
    Email: string;
    CertificatePath: string;
    CompanyId: string;
    CompanyName: string;
    PlantId: string;
    PlantName: string="";
    Latitude: string;
    Longitude: string;
    Photo: string;
    IsCertificate: string;
    UserState: string;
    UserStateStr: string;
    CreateTime: string;
    ExpertCredentials: string;
    ProfessionId: string;
    Interests: string;
    JobTitle: string;
    IsExpert: string;
    VipPlant: string;
    ExpertState: string;

    constructor() {

    }

}