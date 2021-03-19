import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEventComponent } from './user-event/user-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventSearchComponent } from './event-search/event-search.component';



const routes: Routes = [
  { path: "", component: EventListingComponent },
  { path:"register", component: EventRegisterComponent },
  { path: ":eventID", component: EventDetailsComponent },
  { path: "search/:term", component: EventSearchComponent },
  { path: ":userID/myEvents", component: MyEventsComponent },
  { path: ":userID/:eventID", component: UserEventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
