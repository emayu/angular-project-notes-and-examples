import { BadRequest } from './../common/bad-request';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError((error:Response) => {
          if(error.status == 400){
            return throwError(new BadRequest())
          }
          return throwError(new AppError(error));
      }));
  }

  updatePost(post){
    let url = this.url + '/' + post.id ;
    return this.http.patch(url, JSON.stringify({ isRead : true }));
  }

  deletePost(id) {
    let url =  this.url + '/' + id;
    return this.http.delete(url).pipe(
      catchError((error:Response) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      }));
  }
}
