import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Dream } from '../models/dream';

@Injectable({
  providedIn: 'root'
})
export class DreamService {

  baseUrl = 'http://localhost:8087/';
  url = this.baseUrl + 'api/dreams';

  constructor(
    private http: HttpClient
  ) { }
  index(): Observable<Dream[]> {
    return this.http.get<Dream[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('DreamService.index():error retrieving Dream list: ' + err)
        );
      })
    );
  }
}
