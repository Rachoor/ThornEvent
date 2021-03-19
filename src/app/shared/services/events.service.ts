import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventsModel} from '../models/events.model';
import { default as configInfo } from "../config";
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from './api.service';
import { AlertService } from './alert.service';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private  event :EventsModel;
  private headers  = new HttpHeaders().set('content-type','application/json');
  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private _api:ApiService ) { }

//   getOptionals(params={}) {
//     const sortedKeys = Object.keys(params).filter(key=>(key !== 'page' && key !== 'limit')).filter(key=>params[key]!== undefined);

//     let  newParams = new HttpParams()
//                                   .set('page',params['page'])
//                                   .set('limit', params['limit'])


//     let token = this.localService.getJsonValue("token");
//     if(sortedKeys.length>0){
//       if(sortedKeys.length === 1) {
//         return {
//           headers: new HttpHeaders()
//             .set("Accept", "application/json")
//             .set("Authorization", `Bearer ${token}`),
//           params:newParams.set(sortedKeys[0],params[sortedKeys[0]])
//         };
//       }
//       if(sortedKeys.length ===2) {
//         return {
//           headers: new HttpHeaders()
//             .set("Accept", "application/json")
//             .set("Authorization", `Bearer ${token}`),
//           params:newParams.set(sortedKeys[0],params[sortedKeys[0]]).set(sortedKeys[1],params[sortedKeys[1]])
//         };
//       }
//     }
//     else{
// return {
//   headers: new HttpHeaders()
//   .set("Accept", "application/json")
//   .set("Authorization", `Bearer ${token}`),
//   params:newParams
// }
//     }
//   }

  // constructParams(sortedKeys, params, newParams) {
  //   return sortedKeys.map(key=>{
  //       if(params[key] !== undefined) {  
  //          return newParams.set(key, params[key]);
  //       }else{
  //         return newParams;
  //       }
  //     });
  // }

  makeUrl(url) {
    return configInfo.baseUrl + url;
  }

  async createEvent(url, event:EventsModel){
    this.spinner.show();
    const results = await this.http
      .post(this.makeUrl(url), event, {headers: this.headers})
      .toPromise()
      .then((res) => {
        this.spinner.hide();
        return res;
      })
      .catch((err) => {
        this.spinner.hide();
        this.alertService.error(err.statusText);
      });
    return results;
  }

  async readEvents(url){
    this.spinner.show();
    const results = await this._api.get(this.makeUrl(url), this.headers)
    .toPromise()
    .then(result=>{
      this.spinner.hide();
      return result['records'];
    })
    .catch((err) => {
      this.spinner.hide();
      this.alertService.error(err.statusText);
    });
    return results;
  }

  updateEvent(url, event){
    this.spinner.show();
    const results = this._api.patch(this.makeUrl(url), event, this.headers)
    .toPromise()
    .then(result=>{
      this.spinner.hide();
      return result['records'];
    })
    .catch((err) => {
      this.spinner.hide();
      this.alertService.error(err.statusText);
    });
    return results;
  }

  searchEvent(url){
    return this._api.get(this.makeUrl(url),{headers: this.headers});
  }


  setter(event:EventsModel){
    this.event = event;
  }

  getter(){
    return this.event;
  }

}
