import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  API_URL:string = 'http://localhost:3000/articles';

  constructor(private httpClient:HttpClient) { }

  getArticles(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(resp => resp)
  }
}
