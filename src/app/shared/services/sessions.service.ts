import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventsModel} from '../models/events.model';
import { SessionModel } from '../models/session.model';
import { default as configInfo } from "../config";
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from './api.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private headers  = new HttpHeaders().set('content-type','application/json');

  constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private _api:ApiService ) { }

  makeUrl(url) {
    return configInfo.baseUrl + url;
  }

  async readSessions(id){
    this.spinner.show();
    const results = await this._api.get(this.makeUrl(id), this.headers)
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

  async createSession(url, session:SessionModel){
    this.spinner.show();
    const results = await this.http
      .post(this.makeUrl(url), session, {headers: this.headers})
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

  updateSession(url, session){
    this.spinner.show();
    const results = this._api.patch(this.makeUrl(url), session, this.headers)
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

}

