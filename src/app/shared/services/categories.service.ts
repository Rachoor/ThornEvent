import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private  event :CategoryModel;
  private baseUri:string = 'http://localhost:3000/api/v1/categories/';
  private headers  = new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }

  readCategories(){
    return this.http.get(this.baseUri,{headers: this.headers});
  }

}
