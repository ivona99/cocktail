import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailService } from './cocktail.service';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { RandomComponent } from './random/random.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchComponent,
    CardComponent,
    FavoriteComponent,
    HomeComponent,
    PageNotFoundComponent,
    ImagesliderComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
