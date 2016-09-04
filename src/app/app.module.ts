import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; 
import { LayoutComponent } from './layout.component';
import { MainPageComponent } from './main-page';
import { AllPostsComponent } from './blog/all-posts';
import { PostComponent } from './blog/post';
import { AboutMeComponent } from './about-me';
import { ContactComponent } from './contact';

import { Routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        MainPageComponent,
        AllPostsComponent,
        PostComponent,
        AboutMeComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        Routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{}