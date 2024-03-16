import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {
  }

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiUrl = environment.apiUrl;
    const isApiUrl = apiUrl ? request.url.startsWith(apiUrl) : false;

    if (isApiUrl) {
      console.log('request headers')
      request = request.clone({
        setHeaders: {
          "Accept": 'application/json',
          'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          'Pragma': 'no-cache',
          'Expires': '0'
          // "Content-Type": 'application/json',
          // 'Content-Type': 'multipart/form-data'
        }
      });
    }

    return next.handle(request);
  }
}
