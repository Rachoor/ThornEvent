import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';

import {AngularMaterialModule} from '../angular-material/angular-material.module';

import { EventListingComponent } from './event-listing/event-listing.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { UserEventComponent } from './user-event/user-event.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    EventListingComponent, 
    EventCardComponent, 
    EventDetailsComponent, 
    EventRegisterComponent, 
    EventSearchComponent,
    UserEventComponent,
    MyEventsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventsModule { }
