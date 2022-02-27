import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component';
import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { DetailsPageComponent } from './details-page/details-page.component';



@NgModule({
  declarations: [
    MovieListComponent,
    HomepageComponent,
    CreateComponent,
    AboutComponent,
    FrameworkComponent,
    HeaderComponent,
    DetailsPageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'create',
        component:CreateComponent
      },
      {
        path:'list',
        component:MovieListComponent
      },
      {
        path:'movies/:moviesid',
        component:DetailsPageComponent
      }
    ]) 
  ],
  providers: [{provide:APP_BASE_HREF,useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
