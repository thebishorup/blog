import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { MainPageComponent } from './main-page';
import { AllPostsComponent } from './blog/all-posts';
import { PostComponent } from './blog/post';
import { AboutMeComponent } from './about-me';
import { ContactComponent } from './contact';

import { BLOGPOST_ROUTES } from './blog/blog.routing';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'allposts', component: AllPostsComponent }, //TODO:::::
  { path: 'blog/:id', component: PostComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: MainPageComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);