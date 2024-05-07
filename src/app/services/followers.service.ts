import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

export type Follower = {
  avatar_url:string;
  html_url:string;
  login:string;
};

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private url = "https://api.github.com/users";
  constructor(private http: Http) { }


  getListFollowers (user:string) : Observable<Follower[]>{
    return this.http.get(`${this.url}/${user}/followers`)
        .pipe(
          map(response => response.json()),
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
