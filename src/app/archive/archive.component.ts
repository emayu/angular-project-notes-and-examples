import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from '../archive-home/archive-home.component';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archive:Archive = null;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.archive = {
          year:  +params.get("year"),
          month: +params.get("month")
        }
      });
    
  }

  public goToAll(){
    this.router.navigate(['/assignment9']);
  }

}
