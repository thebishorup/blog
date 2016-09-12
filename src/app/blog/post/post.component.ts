import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { BlogModel } from '../model/blogmodel';

@Component({
  moduleId: module.id,
  selector: 'blog-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  private blogViewModelFirebase: BlogModel[] = [];

  //retriving list of posts
  items: FirebaseListObservable<any>;

  tempData: any;
  //ViewModel Properties
  keyy: string = "thisis";
  value: string;

  item: FirebaseObjectObservable<any>;
  private blogId: number;
  private subscription: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute,
    af: AngularFire) {

      this.items = af.database.list('/posts');
      console.log(this.items);

    // this.items = af.database.list('/posts', { preserveSnapshot: true });
    // this.items.subscribe(snap => {
    //   snap.forEach(snap => {
    //     this.tempData = [
    //       new BlogModel(
    //         snap.key,
    //         snap.val().authorName,
    //         snap.val().postedDate,
    //         snap.val().title,
    //         snap.val().post,
    //         snap.val().imageUrl
    //       )
    //     ]

    //     this.blogViewModelFirebase.push(this.tempData);
    //     // console.log(this.blogViewModelFirebase);
    //     // console.log(snap.key);
    //     // console.log(snap.val().authorName);
    //   })
    //   console.log(this.blogViewModelFirebase);
    // })

  }

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
