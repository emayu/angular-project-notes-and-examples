import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response.json();     
        }
      );
  }

  createPost(titlePost:HTMLInputElement){
    let post = { title : titlePost.value };
    titlePost.value = '';
    this.service.create(post)
      .subscribe(
        response => {
          post['id'] =  response.json().id;
          this.posts.splice(0, 0, post);
          console.log(response.json());
        },
        (error:AppError) => {
          if(error instanceof BadInput){
            //this.form.setErrors(error.originalError);
          }else{
            throw error;
          }
        }
      );
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response.json());
        }
      );
  }

  deletePost(post){
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error:AppError) => {
          if(error instanceof NotFoundError){
            alert('This post has already been deleted.');
          }else{
            throw error;      
          }
        }
      );
  }

}
