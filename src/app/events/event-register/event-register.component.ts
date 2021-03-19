import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SessionModel } from 'src/app/shared/models/session.model';
import { AtendeeService } from 'src/app/shared/services/atendee.service';
import { SessionsService } from 'src/app/shared/services/sessions.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.scss']
})
export class EventRegisterComponent implements OnInit {
  
  @Input() eventId: string;
  public sessions: SessionModel[];

  constructor(private _sessionsService: SessionsService, private _atendeeService: AtendeeService) { }

  ngOnInit() {
    this.viewSessions(this.eventId);
  }

  viewSessions(eid){
    this._sessionsService.readSessions(`sessions/${eid}`).then(
      data =>{
        this.sessions = data;
   })
  }
  
  onSubmit(eventForm){
    eventForm.value['event__c']  = this.eventId;
    this._atendeeService.registerAtendee(`sessions/${eventForm.session__c}/registerAttendee`, eventForm.value).subscribe(
      data =>{
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

}
