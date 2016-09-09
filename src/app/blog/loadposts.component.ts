import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'blog-loadposts',
  templateUrl: 'loadposts.component.html',
  styleUrls: ['loadposts.component.css']
})
export class LoadpostsComponent implements OnInit {

  private blogId: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.blogId = params['id'];
      }
    )
  }

}
