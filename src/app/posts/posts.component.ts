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
        posts => this.posts = posts
      );
  }

  createPost(titlePost:HTMLInputElement){
    let post = { title : titlePost.value };
    this.posts.splice(0, 0, post);

    titlePost.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] =  newPost.id;
        },
        (error:AppError) => {
          this.posts.splice(0,1);

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
        updatedPost => {
          console.log(updatedPost);
        }
      );
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
        (error:AppError) => {
          this.posts.splice(index,0, post);
          
          if(error instanceof NotFoundError){
            alert('This post has already been deleted.');
          }else{
            throw error;      
          }
        }
      );
  }

}
