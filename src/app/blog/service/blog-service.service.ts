import { Injectable, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { BlogModel } from '../model/blogmodel';

@Injectable()
export class BlogServiceService {

  //retriving list of posts
  items: FirebaseListObservable<any>;
  tempData: any;
  private blogViewModelFirebase: BlogModel[] = [];

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

  constructor(private af: AngularFire) {}

  //Populate all posts
  getAllPosts() {

    this.blogViewModelFirebase = [];
    this.items = this.af.database.list('/posts', { preserveSnapshot: true });
    this.items.subscribe(snap => {
      snap.forEach(snap => {
        this.tempData = 
          new BlogModel(
            snap.key,
            snap.val().authorName,
            snap.val().postedDate,
            snap.val().title,
            snap.val().post,
            snap.val().imageUrl
          )
        this.blogViewModelFirebase.push(this.tempData);
      })
    })

    return this.blogViewModelFirebase;
  }
}
