import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'blog-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
