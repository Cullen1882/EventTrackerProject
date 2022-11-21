import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Dream } from '../models/dream';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DreamService {

  baseUrl = 'http://localhost:8087/';
  url = this.baseUrl + 'api/dreams';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }
  getHttpOptions() {
    let options = {
      headers: {
        Authorization: 'Basic ' + this.auth.getCredentials(),
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
    return options;
  }
  index(): Observable<Dream[]> {
    return this.http.get<Dream[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('dreamService.index():error retrieving Dream list: ' + err)
        );
      })
    );
  }
  show(dreamId: number): Observable<Dream>{
    return this.http.get<Dream>(this.url + '/' + dreamId, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('dreamService.show():error retrieving Todo : ' + err)
        );
      })
    );
  }
  create(dream: Dream) {
    return this.http.post<Dream>(this.url, dream, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.create():error creating Todo: ' + err)
        );
      })
    );
  }
  update(dream: Dream) {
    return this.http.put<Dream>(this.url + '/' + dream.id, dream, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('dreamService.update():error updating Dream: ' + err)
        );
      })
    );
  }
  destroy(id: number) {
    return this.http.delete<void>(this.url + '/' + id, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('dreamService.destroy(): Error deleting dream: ' + err)
        );
      })
    );
  }
}
