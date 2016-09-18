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

  allPosts: BlogModel[];
  errorMessage: string;

  constructor(private service: BlogServiceService) { }

  ngOnInit() {
    this.getBlogPosts();
    console.log(this.allPosts);
  }

  private getBlogPosts() {
    this.service.getBlogPosts();
    this.service.blogPostChanged.subscribe(
      (blogPosts: BlogModel[]) => this.allPosts = blogPosts
    );
  }

}
