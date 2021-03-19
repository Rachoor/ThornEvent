import { Component, OnInit } from '@angular/core';
import { EventsModel } from "../../shared/models/events.model";
import {EventsService} from "../../shared/services/events.service";
import { ActivatedRoute, Router,NavigationEnd} from "@angular/router";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventCardComponent } from '../event-card/event-card.component';
import {ModalComponent} from '../../shared/utils/modal/modal.component';
import {CategoriesService} from 'src/app/shared/services/categories.service' ;
import { CategoryModel } from 'src/app/shared/models/category.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
   events: EventsModel[];
  categories: CategoryModel[];
  event: EventsModel[];
  description:string;

  userid: string;
  
  constructor(private _eventsService:EventsService, private router:Router, private route: ActivatedRoute, public dialog: MatDialog, private _categoriesService: CategoriesService, private _alertService:AlertService) { 
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // chck if user coming from home page 
      // if(event.url === '/events/0055Y00000FiedeQAB/myEvents') {
      //   this.createEvent()
      // }
    });
  }

  ngOnInit() {
    this.readEvents();
    this.readCategories();
    this.userid = this.route.snapshot.paramMap.get('userID');
  }

  async readEvents(){
    await this._eventsService.readEvents(`events`)
    .then(data=>{
      this.events = data;
    });
  }

  readCategories(){
    this._categoriesService.readCategories().subscribe(
      data =>{
        this.categories = data['records'];
      },
      error =>{
        console.log(error);
      }
    )
  }

  View(id){
    this.router.navigate(['events/'+id+'/'+id]);
  }

  deleteEvent(id){
    confirm(" Are you sure you want to delete " + id );
  }

  createEvent() {
   const dialogRef = this.dialog.open(ModalComponent, {
      data: {type: 'event',name: 'Create Event', userid: this.userid, categories: this.categories, function: 'create'}
    });

    dialogRef.afterClosed().subscribe(result => {
        this._alertService.success(result.message);
    });
  }

   editEvent(id){    
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {type:'event',name: 'Edit', userid: this.userid, categories: this.categories, event: this.events[id], function: 'edit'}
      });
      dialogRef.afterClosed().subscribe(result => {
            this._alertService.success(result.message);
      });
  }
}
