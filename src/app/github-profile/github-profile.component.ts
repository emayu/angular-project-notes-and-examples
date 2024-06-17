import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //this will be called on when the component is render
    console.log("GitHubProfile on Init")
    //use this form to do not use observables
    let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap
      // this will called even if I stay in the same page
      .subscribe( params => {
        let id = +params.get('id');
        console.log(id);
      });
  }

  submit(){
    this.router.navigate(['/followers']);
  }

}
