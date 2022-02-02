import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const header = {
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('id_token'),
        'Content-Type': req.headers.get('Content-Type') || 'application/json',
      },
    };
    req = req.clone(header);
    return next.handle(req);
  }
}
