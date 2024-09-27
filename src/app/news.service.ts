import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private _HttpClient: HttpClient) {

  }

  getNews(): Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=955e813b09fd495fa5d1710ed13b164d`)
  }

}
