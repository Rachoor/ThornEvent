import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { EventsModel } from 'src/app/shared/models/events.model';
import { SessionModel } from 'src/app/shared/models/session.model';
import { EventsService } from 'src/app/shared/services/events.service';
import { SessionsService } from 'src/app/shared/services/sessions.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

   event: EventsModel;
   sessions: SessionModel[];
   sessionData: SessionModel;
   eventID: String;
  constructor(private _eventsService:EventsService, private _sessionsService: SessionsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventID = this.route.snapshot.paramMap.get('eventID');
    this.viewEvent(this.eventID);
    this.viewSessions(this.eventID);
  }

  async viewEvent(id){
    await this._eventsService.readEvents(`events/${id}`)
    .then(data=>{
      this.event = data[0];
    })

  }

 viewSessions(eid){
    this._sessionsService.readSessions(`sessions/${eid}`).then(
      data =>{
        this.sessions = [...data];
        this.sessionData = this.sessions[0];
       },
    )
  }

  onChange(x){
    this.sessionData = this.sessions[x];    
  }

}
