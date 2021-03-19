export class EventsModel {
    public id?: String;
    public title__c: String;
    public imageurl__c: String;
    public category__c: String;
    public category__r :{Id:string, name__c:string};
    public startdate__c: Date;
    public enddate__c: Date;
    public starttime__c: String;
    public endtime__c: String;
    public status__c: String;
    public registrationlimit__c: number;
    public seatsremaining__c: number;
    public createdBy__c: String;
    public description__c: String;
}