import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { EventsModel } from "../../shared/models/events.model";
import {EventsService} from "../../shared/services/events.service";
import { Router} from "@angular/router";
import { _MatTabBodyBase } from '@angular/material';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {
  private events: EventsModel[];
  public categories = ['music', 'live','spiritual','fitness','technology', 'fashion'];
  public categoryEvents: EventsModel[];
  public popularEvents: EventsModel[];
  public latestEvents: EventsModel[];
  searchTerm: String;
  activeTab;

  constructor(private _eventsService:EventsService, private router:Router) { }

  ngOnInit() {
    this.readEvents();
  }

  async readEvents(){
    await this._eventsService.readEvents(`events`)
    .then(data=>{
      this.events = data;
      this.catEvents(0);
      this.popEvents();
      this.latEvents();
    })
  }

catEvents(id){
  this.categoryEvents = this.events.filter(event => event.category__r.name__c == this.categories[id]);
}

latEvents(){
  const today = new Date().getTime();
  this.latestEvents = this.events.filter(event => (new Date(event.startdate__c).getTime() > today));
}

popEvents(){
  this.popularEvents = this.events.sort((a, b) => a.seatsremaining__c - b.seatsremaining__c);
}

  tabChanged(event){
    this.catEvents(event);
  }

  createEvent() {
    // this.router.navigate(['/', 'events', '0055Y00000FiedeQAB', 'myEvents'])
  }
  searchEvents(term) {
    this.router.navigate(['/events', 'search', term]);
  }


}

