import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url:string, private http: Http) { }

  getAll():Observable<any[]>{
    return this.http.get(this.url)
      .pipe(
        map( response =>  response.json()),
        catchError(this.handleError)
      );
  }

  get(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
      .pipe( 
        map( response => response.json()),
        catchError(this.handleError)
      );
  }

  create(resource){
    //return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map( response =>  response.json()),
        catchError(this.handleError)
      );
  }

  update(resource){
    let url = this.url + '/' + resource.id ;
    return this.http.patch(url, JSON.stringify({ isRead : true }))
      .pipe(
        map( response =>  response.json()),
        catchError(this.handleError)
      );
  }

  delete(id) {
    let url =  this.url + '/' + id;
    //return throwError(new AppError());
    return this.http.delete(url)
    .pipe(
      map( response =>  response.json()),
      catchError(this.handleError)
    );
  }

  private handleError(error:Response){
    if(error.status == 400){
      return throwError(new BadInput(error.json()))
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }


}
