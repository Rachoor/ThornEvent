import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventsModel } from '../../shared/models/events.model';
import { SessionModel } from '../../shared/models/session.model';
import { EventsService } from '../../shared/services/events.service';
import { SessionsService } from '../../shared/services/sessions.service';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../../shared/utils/modal/modal.component';
import { CategoriesService } from 'src/app/shared/services/categories.service' ;
import { CategoryModel } from 'src/app/shared/models/category.model';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent implements OnInit {

  event: EventsModel;
  sessions: SessionModel[];
  userId: string;
  eventId: string;
  categoryId: string;
  constructor(private _eventsService:EventsService,private _sessionsService: SessionsService, private router:Router, private route: ActivatedRoute, public dialog: MatDialog, private _categoriesService: CategoriesService, private _alertService:AlertService) { }

  ngOnInit() {
     this.userId = this.route.snapshot.paramMap.get('userID');
     this.eventId = this.route.snapshot.paramMap.get('eventID');
    this.viewEvent(this.userId, this.eventId);
    this.viewSessions(this.eventId);
  }

  async viewEvent(uid, eid){
    await this._eventsService.readEvents(`events/${eid}`)
    .then(data=>{
      this.event = data[0];
    });
  }

  viewSessions(eid){
    this._sessionsService.readSessions(`sessions/${eid}`).then(
      data =>{
        this.sessions = data;
      }
    )
  }

  createSession() {
    const dialogRef = this.dialog.open(ModalComponent, {
       data: {type: 'session', name: 'Create Session', userid: this.userId, eventid: this.eventId, function: 'create' }
     });
 
     dialogRef.afterClosed().subscribe(result => {
        this._alertService.success(result.message);
     });
   }

   registerUser() {
    const dialogRef = this.dialog.open(ModalComponent, {
       data: {type: 'register', name: 'Register Atendee', eventId: this.eventId, function: 'create', sessions: this.sessions }
     });
 
     dialogRef.afterClosed().subscribe(result => {
        this._alertService.success(result.message);
     });
   }

   editSession(id){    
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {type:'session',name: 'Edit', userid: this.userId, session: this.sessions[id], function: 'edit', eventID:this.eventId}
    });
    dialogRef.afterClosed().subscribe(result => {
          this._alertService.success(result.message);
    });
}

getSessions(event) {
  if(event.tab.textLabel === 'Sessions') {
    this.viewSessions(this.eventId);
  }
}

deleteSession(id) {}


}
