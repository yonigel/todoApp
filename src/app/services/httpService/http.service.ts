import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServiceInterface } from './http-service-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpServiceInterface{

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body: Object = {}): Observable<any> {
    return this.http.post(url, body);
  }
  
  put(url: string, body: Object = {}): Observable<any> {
    return this.http.put(url, body);
  }

  delete(url: string, body: Object = {}): Observable<any> {
    return this.http.delete(url, body);
  }
}
