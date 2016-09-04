import { RouterConfig } from "@angular/router";

import { LoadpostsComponent } from './loadposts.component';
import { AllPostsComponent } from '../blog/all-posts';
import { PostComponent } from '../blog/post';

export const BLOGPOST_ROUTES: RouterConfig = [
    { path: '', component: LoadpostsComponent },
    { path: ':id', component: PostComponent }
];