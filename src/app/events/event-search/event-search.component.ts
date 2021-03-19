import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsModel } from 'src/app/shared/models/events.model';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})

export class EventSearchComponent implements OnInit {
  searchTerm: String;
  events: EventsModel[];
  

  constructor(private router:Router, private route: ActivatedRoute, private _eventsService:EventsService) { }

  ngOnInit() {
    this.searchTerm = this.route.snapshot.paramMap.get('term');
    this.searchEvents(this.searchTerm);
  }

  searchEvents(term) {
    this._eventsService.searchEvent(`events/search/${term}`).subscribe(
      data =>{
        this.events = data['records'];
        console.log(this.events);
      },
      error =>{
        console.log(error);
      }
    )
  }


}
