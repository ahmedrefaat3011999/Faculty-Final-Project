import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private headers: HttpHeaders;
  private URI: string = '';
  private accesToken: string = '';

  constructor(@Inject(LOCALE_ID) private locale: string, private http: HttpClient) {

  }
  public setURI(endpoint: string): void {
    // ;
    this.URI += endpoint;

  }
  public setHeaders(contentType?: string): void {
    //var Token = localStorage.getItem('Authorization');
    var user = localStorage.getItem('user');
    var Token = JSON.parse(user) == null ? null : JSON.parse(user).token.token;

    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Acces-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
      'Content-Type': `${contentType ? contentType : 'application/json'}`,
      //'Authorization': 'Basic YWRtaW46YWRtaW5AMTIzcXdl',
      'Authorization': `Bearer ${Token}`,
      'Accept-Language': this.locale === 'en' ? "en" : "ar",
    })
  }
  public post(data?: any): Observable<any> {
    let lang = localStorage.getItem('language');
    // let lang=this.locale === 'ar' ? "ar" : "en";
    return this.http.post(this.URI + 'lang=' + lang, data, { headers: this.headers });
  }

  public get(data?: any): Observable<any> {
    // let params = new HttpParams().set('pageIndex', data);
    // ;
    var lang = localStorage.getItem('language');
    // let lang=this.locale === 'ar' ? "ar" : "en";
    return this.http.get(this.URI + 'lang=' + lang, { headers: this.headers });
  }

  public put(data: any): Observable<any> {
    var lang = localStorage.getItem('language');
    // let lang=this.locale === 'ar' ? "ar" : "en";
    return this.http.put(this.URI + 'lang=' + lang, data, { headers: this.headers });
  }

  public delete(number): Observable<any> {
    var lang = localStorage.getItem('language');
    // let lang=this.locale === 'ar' ? "ar" : "en";
    return this.http.delete(this.URI + 'lang=' + lang, { headers: this.headers });
  }
}
