import { Time } from "@angular/common";

export class SessionModel {
    public id: String;
    public title__c: String;
    public event__c: String;
    public startdate__c: Date;
    public enddate__c: Date;
    public starttime__c: String;
    public endtime__c: String;
    public registrationlimit__c: number;
    public seatsremaining__c: number;
    public createdUserId__c: String;
    public category__c: String;
    public status__c: String;
    description__c:string;
}
