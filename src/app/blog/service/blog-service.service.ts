import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { BlogModel } from '../model/blogmodel';

@Injectable()
export class BlogServiceService {

  //retriving list of posts
  items: FirebaseListObservable<any>;
  tempData: any;
  private blogViewModelFirebase: BlogModel[] = [];
  blogPostChanged = new EventEmitter<BlogModel[]>();

  private blogViewModel: BlogModel[] = [
    new BlogModel(
      '1001',
      'thebisho',
      '7/9/2016',
      'First Exciting Blog post!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis in,' +
      'doloribus dolores ipsam. Laborum ratione suscipit nemo modi officiis, ipsum veritatis' +
      'impedit recusandae, expedita debitis incidunt, rem at unde. Lorem ipsum dolor sit amet,' +
      'consectetur adipisicing elit. Deserunt nisi neque quam beatae,',
      '../Assets/images/pine-seeds.png'
    ),
    new BlogModel(
      '1002',
      'tanjali',
      '9/9/2016',
      'Second Exciting Blog post!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis in,' +
      'doloribus dolores ipsam. Laborum ratione suscipit nemo modi officiis, ipsum veritatis' +
      'impedit recusandae, expedita debitis incidunt, rem at unde. Lorem ipsum dolor sit amet,' +
      'consectetur adipisicing elit. Deserunt nisi neque quam beatae,',
      '../Assets/images/pine-seeds.png'
    )
  ];

  constructor(private af: AngularFire, private http: Http) {}

  //Populate all posts
  getAllPosts() {



    // return this.http.get("https://blog-48aa1.firebaseio.com/posts.json")
    // .map((response: Response) => response.json())
    // .subscribe(
    //   (data : BlogModel[]) => {
    //     console.log(data);
    //     this.blogViewModelFirebase = data;
    //     console.log(this.blogViewModelFirebase);
    //   }
    // );
    
    // this.blogViewModelFirebase = [];
    // this.items = this.af.database.list('/posts', { preserveSnapshot: true });
    // this.items.subscribe(snap => {
    //   snap.forEach(snap => {
    //     this.tempData = 
    //       new BlogModel(
    //         snap.key,
    //         snap.val().authorName,
    //         snap.val().postedDate,
    //         snap.val().title,
    //         snap.val().post,
    //         snap.val().imageUrl
    //       )
    //     this.blogViewModelFirebase.push(this.tempData);
    //   })
    // })

    // console.log(this.blogViewModelFirebase);
    // return this.blogViewModelFirebase;
  }

  getBlogPosts() {

    return this.http.get("https://blog-48aa1.firebaseio.com/posts.json")
                    .map((response: Response) => response.json() )
                    .subscribe(
                      (data: BlogModel[]) => {
                        this.blogViewModelFirebase = data;
                        this.blogPostChanged.emit(this.blogViewModelFirebase);
                      }
                    );

  }

  private extractData (response: Response) {

    let body = response.json();
    console.log(body.data);
    return body.data || {};

  }

  private handleError (error: any) {

    //TODO: Error Logging
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);

  }
}
