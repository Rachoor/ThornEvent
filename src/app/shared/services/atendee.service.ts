import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AtendeeModel} from '../models/atendee';
import { default as configInfo } from "../config";
@Injectable({
  providedIn: 'root'
})
export class AtendeeService {

  private  atendee :AtendeeModel;
  private headers  = new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }

  makeUrl(url) {
    return configInfo.baseUrl + url;
  }

  registerAtendee(url, atendee:AtendeeModel){
    return this.http.post(this.makeUrl(url),atendee,{headers: this.headers});
  }  
}
