import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router: Router,
              private _authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          this.checkHttpStatus(err);
          return throwError(err);
        })
    );
  }

  private checkHttpStatus(err: HttpErrorResponse): void {
    switch (err.status) {
   
      case 403:
        this._router.navigate(['/auth/unauthorized']);
        break;
      case 401:
      case 402:
        this._authService.logOut();
        break;
      case 404:
        this._router.navigate(['/auth/not-found']);
        break;
      case 500:
        break;
      default:
        break;
    }
  }

  private getErrorMessages(err: HttpErrorResponse): string {

    console.log(err)
    let err1 = err?.error?.errors ? Object.entries(err?.error?.errors)
        .map(([k, v]) => `${(v as string[])?.join(', ')}`)
        .join('.\n') : null;

    let err2 = err?.error?.errors;

    let err3 = err?.error?.detail;

    let err4 = typeof err?.error == "string" ? err?.error : null;

    let err5 = `Seems like something went wrong. please contact your administrator`;

    return err1 || err2 || err3 || err4 || err5;
  }
}
