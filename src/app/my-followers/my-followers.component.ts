import { Component, OnInit } from '@angular/core';
import { FollowersService, Follower } from '../services/followers.service';
import { NotFoundError } from '../common/not-found-error';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';


@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  followers: Follower[] = [];
  userName: string = "mosh-hamedani";
  existUser = false;
  isSearching = false;

  constructor(
    private followersService: FollowersService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.searchFollowers();
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap]
    ).subscribe( combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      console.log('id', id, 'page', page);
    });
    
  }

  searchFollowers() {
    this.isSearching = true;
    console.log(this.userName);
    if (this.userName) {
      this.followersService
        .getListFollowers(this.userName)
        .subscribe({
          next: list => {
            this.existUser = true;
            this.followers = list;
            this.isSearching = false;
          },
          error: err => {
            if (err instanceof NotFoundError) {
              this.existUser = false;
              this.followers = [];
              this.isSearching = false;
            } else {
              throw err;
            }
          }
        });
    }
  }
}
