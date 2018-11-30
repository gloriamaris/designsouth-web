import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor (private http: HttpClient) {}

  ngOnInit () {  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // if naay error
      console.error(error);
      console.error('Error from ' + operation);

      return of (result as T);
    };
  }

  addUser (user: any): Observable<User> {
    let url = `${environment.API_URL}/user/`;

    return this.http.post<User>(url, user, headers)
            .pipe(
              tap(user => { return user }),
              catchError(err => of(err))
            );
  }

  getUsers (): Observable<User[]> {
    let url = `${environment.API_URL}/user/`;

    return this.http.get<User[]>(url)
            .pipe(
              tap(users => { return users }),
              catchError(this.handleError('getUsers', []))
            );
  }

  getUser (id: any): Observable<User> {
    let url = `${environment.API_URL}/user/${id}/`;

    return this.http.get<User>(url).pipe(
      tap(user => { return user }),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  updateUser (id: any, user: any): Observable<User> {
    let url = `${environment.API_URL}/user/${id}/`;

    return this.http.patch(url, user, headers)
            .pipe(
              tap(_ => console.log(`Updated user id=${id}`)),
              catchError(this.handleError<any>('updateUser'))
            );
  }

  deleteUser (id: any): Observable<User> {
    let url = `${environment.API_URL}/user/${id}/`;

    return this.http.delete<User>(url, headers).pipe(
      tap(_ => console.log(`Deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

}
