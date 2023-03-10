import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  const startTime = (new Date()).getTime();
    return next.handle(request).pipe(
      map(event=>{

          const endTime = (new Date()).getTime();
          const difference = endTime - startTime;
          console.log( "success in" + difference);

          return event;



      })
    );
  }
}
