import { Component, OnInit, Input } from '@angular/core';
import {EventsService} from "../../shared/services/events.service";
import { Router} from "@angular/router";


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() startDate: string;
  @Input() remainingSeats: string;
  @Input() eventId: string;
  @Input() imageUrl: string;
  @Input() status: string;




  constructor(private _eventsService:EventsService, private router:Router) { }

  ngOnInit() {
  }
}
