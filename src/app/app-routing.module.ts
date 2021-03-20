import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { UserEventComponent } from './events/user-event/user-event.component';

const routes: Routes = [
  {path:"", redirectTo:"events", pathMatch:"full"},
  {
    path: "events",
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
