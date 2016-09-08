import { Component, OnInit } from '@angular/core';

import { BlogModel } from '../model/blogmodel';
import { BlogServiceService } from '../service/blog-service.service';

@Component({
  moduleId: module.id,
  selector: 'blog-all-posts',
  templateUrl: 'all-posts.component.html',
  styleUrls: ['all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  allPosts: BlogModel[] = [];

  constructor(private service: BlogServiceService) { }

  ngOnInit() {
    this.allPosts = this.service.getAllPosts();
  }

}
