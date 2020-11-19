import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post){
    let url = this.url + '/' + post.id ;
    return this.http.patch(url, JSON.stringify({ isRead : true }));
  }

  deletePost(id) {
    let url =  this.url + '/' + id;
    return this.http.delete(url);
  }
}
