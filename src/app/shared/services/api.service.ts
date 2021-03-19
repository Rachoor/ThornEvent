import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  get(url, headers) {
    return this.http.get(url, headers);
  }

  patch(url, data, headers) {
    return this.http.patch(url,data,headers);
  }

  post(url, data, headers) {
    return this.http.post(url,data,headers);
  }

  delete() {}
}
