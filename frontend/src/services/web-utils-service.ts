import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebUtilsService {
  private api_url = environment.api_url
  readonly http = inject(HttpClient);

  constructor() { }

  get<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(`${this.api_url}${endpoint}`, options).pipe(
      map((response: T) => response)
    );
  }

  post<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(`${this.api_url}${endpoint}`, body, options).pipe(
      map((response: T) => response)
    );
  }

  put<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(`${this.api_url}${endpoint}`, body, options).pipe(
      map((response: T) => response)
    );
  }

  delete<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(`${this.api_url}${endpoint}`, options).pipe(
      map((response: T) => response)
    );
  }
}