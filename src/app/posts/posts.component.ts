import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit {
  posts : any[];
  

  constructor(private service:PostService)  {
  }

  ngOnInit(){
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(titlePost:HTMLInputElement){
    let post = { title : titlePost.value };
    titlePost.value = '';
    this.service.createPost(post)
      .subscribe( response => {
        post['id'] =  response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      })
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe( response => {
        console.log(response.json());
      });
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe( response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
