import { Component, OnInit } from '@angular/core';
import { FollowersService, Follower } from '../services/followers.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  followers: Follower[] = [];
  userName: string = "mosh-hamedani";
  existUser = false;

  constructor(private followersService: FollowersService) { }

  ngOnInit(): void {
    this.searchFollowers();
  }

  searchFollowers() {
    console.log(this.userName);
    if (this.userName) {
      this.followersService
        .getListFollowers(this.userName)
        .subscribe({
          next: list => {
            this.existUser = true;
            this.followers = list;
          },
          error: err => {
            if (err instanceof NotFoundError) {
              this.existUser = false;
              this.followers = [];
              alert(`Usuario '${this.userName}' no encontrado`);
            } else {
              throw err;
            }
          }
        });
    }
  }
}
