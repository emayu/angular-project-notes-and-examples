import { Component, OnInit } from '@angular/core';
import { FollowersService, Follower } from '../services/followers.service';
import { NotFoundError } from '../common/not-found-error';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  followers: Follower[] = [];
  userName: string = "mosh-hamedani";
  existUser = false;

  constructor(
    private followersService: FollowersService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.searchFollowers();
    this.route.paramMap
      .subscribe( params => {

      });
    this.route.queryParamMap
      .subscribe(
        params => {

        });
    /** For static extract query param */
    // let pageQP = this.route.snapshot.queryParamMap.get('page');
    // let orderQP = this.route.snapshot.queryParamMap.get('order');
    // console.log(pageQP, orderQP);
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
            } else {
              throw err;
            }
          }
        });
    }
  }
}
