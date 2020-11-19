import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url:string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource){
    let url = this.url + '/' + resource.id ;
    return this.http.patch(url, JSON.stringify({ isRead : true }))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id) {
    let url =  this.url + '/' + id;
    return this.http.delete(url)
    .pipe(
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
