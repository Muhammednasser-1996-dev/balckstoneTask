import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {
    // this.language = JSON.parse(localStorage.getItem('user')).language;
    // console.log(this._authService.getToken());
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addHeaders(request));
  }

  addHeaders(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        'X-RapidAPI-Key': '4f6e58aa3emsh7352c4cbf7b7edbp1c697bjsnde72b0794664',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      },
    });
  }
}
