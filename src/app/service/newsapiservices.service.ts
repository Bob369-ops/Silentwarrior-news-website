import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient)  { }

  //newsapiurl
newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

//topheading()
topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}










