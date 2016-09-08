import { Injectable } from '@angular/core';

import { BlogModel } from '../model/blogmodel';

@Injectable()
export class BlogServiceService {

  private blogViewModel: BlogModel[] = [
    new BlogModel(
      '1001', 
      'thebisho',
      '7/9/2016',
      'First Exciting Blog post!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis in,' + 
      'doloribus dolores ipsam. Laborum ratione suscipit nemo modi officiis, ipsum veritatis'+ 
      'impedit recusandae, expedita debitis incidunt, rem at unde. Lorem ipsum dolor sit amet,'+
      'consectetur adipisicing elit. Deserunt nisi neque quam beatae,',
      '../Assets/images/pine-seeds.png'
    ),
    new BlogModel(
      '1002', 
      'tanjali',
      '9/9/2016',
      'Second Exciting Blog post!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis in,' + 
      'doloribus dolores ipsam. Laborum ratione suscipit nemo modi officiis, ipsum veritatis'+ 
      'impedit recusandae, expedita debitis incidunt, rem at unde. Lorem ipsum dolor sit amet,'+
      'consectetur adipisicing elit. Deserunt nisi neque quam beatae,',
      '../Assets/images/pine-seeds.png'
    )
  ];

  constructor() { }

  //Populate all posts
  getAllPosts() {
    return this.blogViewModel;
  }

}
