import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventsModel } from 'src/app/shared/models/events.model';
import { EventsService } from 'src/app/shared/services/events.service';
import { SessionModel } from '../../models/session.model';
import { AlertService } from '../../services/alert.service';
import { AtendeeService } from '../../services/atendee.service';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  submitDisabled= false;
  statuses = ['open', 'closed', 'draft', 'sold out']
  type:string;
  public cevent: EventsModel = {
     id: '',
     title__c: '',
     imageurl__c: '',
     category__c: '',
     category__r:{Id:'', name__c:''},
     startdate__c: new Date(),
     enddate__c: new Date(),
     starttime__c: '',
     endtime__c: '',
     status__c: '',
     registrationlimit__c: 0,
     seatsremaining__c: 0,
     createdBy__c: '',
     description__c: ''
  };

  public csession: SessionModel = {
    id: '',
    title__c: '',
    event__c:'',
    startdate__c: new Date(),
    enddate__c: new Date(),
    starttime__c: '',
    endtime__c: '',
    registrationlimit__c: 0,
    status__c:'',
    seatsremaining__c: 0,
    createdUserId__c: '',
    category__c:'',
    description__c:''
 };
  
 public rsessions: SessionModel[];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private _eventsService:EventsService,private _sessionService:SessionsService, private _atendeeService: AtendeeService,private _alertService:AlertService) {}

    ngOnInit() {
      this.type = this.data.type;
      if(this.data.event) {
        this.cevent = this.data.event;
      }
      if(this.data.session){
        this.csession = this.data.session;
      }
     if(this.data.sessions){
        this.rsessions = this.data.sessions;
      }

    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    getStatus() {

    }

  onEventSubmit(eventform) {
    if(eventform.valid) {
      this.submitDisabled = true;
    if(this.data.function == "create"){
      eventform.value['createdUserId__c'] = this.data.userid;
      eventform.value['status__c'] = "Draft";
      eventform.value['seatsRemaining__c'] = eventform.value['registrationLimit__c'];
      this._eventsService.createEvent('events',eventform.value).then(
        data=> this.dialogRef.close({message:'event created sucessfully'}));
    }
     else{
      this._eventsService.updateEvent(`events/${this.data.event.id}`,eventform.value).then(
        data => this.dialogRef.close({message:'event updated successfully'})); 
     }
  }
}

onSessionSubmit(sessionform) {
  if(sessionform.valid) {
    this.submitDisabled = true;
  if(this.data.function == "create"){
    sessionform.value['createdUserId__c'] = this.data.userid;
    sessionform.value['event__c'] = this.data.eventid;
    sessionform.value['status__c'] = "Draft";
    sessionform.value['seatsRemaining__c'] = sessionform.value['registrationLimit__c'];
    this._sessionService.createSession(`sessions/${this.data.eventID}`,sessionform.value).then(
      data =>{
        this.dialogRef.close({message:'session created sucessfully'});
      }
    );
  }
   else{
    this._sessionService.updateSession(`sessions/${this.data.eventID}/${this.data.session.id}`,sessionform.value).then(
      data =>this.dialogRef.close({message:'session updated sucessfully'})); 
   }
}
}

onRegisterSubmit(eventForm) {
  if(eventForm.valid) {
    this.submitDisabled = true;
    eventForm.value['event__c']  = this.data.eventId;
    console.log(eventForm);
    this._atendeeService.registerAtendee(`sessions/${eventForm.session__c}/registerAttendee`, eventForm.value).subscribe(
      data =>this.dialogRef.close({message:'Atendee registation sucessfull'}));
}
}

}
