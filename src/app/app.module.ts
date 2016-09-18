import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';
import { MainPageComponent } from './main-page';
import { AllPostsComponent } from './blog/all-posts';
import { PostComponent } from './blog/post';
import { AboutMeComponent } from './about-me';
import { ContactComponent } from './contact';
import { LoadpostsComponent } from './blog/loadposts.component';

import { Routing } from './app.routing';

import { BlogServiceService } from './blog/service/blog-service.service';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAGlSz1sf3A2Sz4iIjsM3L-h7HpWeIBchM",
    authDomain: "blog-48aa1.firebaseapp.com",
    databaseURL: "https://blog-48aa1.firebaseio.com",
    storageBucket: "blog-48aa1.appspot.com"
};

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        MainPageComponent,
        AllPostsComponent,
        PostComponent,
        AboutMeComponent,
        ContactComponent,
        LoadpostsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        Routing,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [BlogServiceService],
    bootstrap: [AppComponent]
})

export class AppModule { }