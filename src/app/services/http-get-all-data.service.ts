import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpGetAllDataService {
  SERVER_URL: string = 'https://movies-app1.p.rapidapi.com/';

  constructor(private _httpClient: HttpClient) {}
  get(): Observable<any> {
    return this._httpClient.get(this.SERVER_URL + 'api/movies');
  }
  getCategory(category: any): Observable<any> {
    console.log(category);
    return this._httpClient.get(this.SERVER_URL + 'api/movies', {
      params: { type: category },
    });
  }
}
