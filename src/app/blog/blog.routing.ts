import { RouterConfig } from "@angular/router";

import { AllPostsComponent } from '../blog/all-posts';
import { PostComponent } from '../blog/post';

export const BLOGPOST_ROUTES: RouterConfig = [
    { path: '', component: AllPostsComponent },
    { path: ':id', component: PostComponent }
];