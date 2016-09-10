import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'blog-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  //ViewModel Properties
  keyy: string = "thisis";
  value: string;

  item: FirebaseObjectObservable<any>;
  private blogId: number;
  private subscription: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute,
    af: AngularFire) {
    this.item = af.database.object('/Name', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      this.keyy = snapshot.key;
      this.value = snapshot.val();
    })
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
