import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiUrl = environment.apiUrl;
    const isApiUrl = apiUrl ? request.url.startsWith(apiUrl) : false;

    const token = localStorage.getItem("userToken");
    console.log(token);
    if (token && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }

    return next.handle(request);
  }
}
