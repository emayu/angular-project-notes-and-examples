import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit {
  posts : any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http)  {
  }

  ngOnInit(){
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(titlePost:HTMLInputElement){
    let post = { title : titlePost.value };
    titlePost.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe( response => {
        post['id'] =  response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      })
  }

  updatePost(post){
    let url = this.url + '/' + post.id ;
    this.http.patch(url, JSON.stringify({ isRead: true }))
      .subscribe( response => {
        console.log(response.json());
      });
  }

  deletePost(post){
    let url =  this.url + '/' + post.id;
    this.http.delete(url)
      .subscribe( response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
