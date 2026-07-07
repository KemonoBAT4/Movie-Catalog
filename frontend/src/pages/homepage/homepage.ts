import { Component } from '@angular/core';
import { ContinueWatchingComponent } from '../../components/continue-watching-component/continue-watching-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { FavouritesComponent } from '../../components/favourites-component/favourites-component';

@Component({
  selector: 'app-homepage',
  imports: [
    ContinueWatchingComponent,
    HeroComponent,
    FavouritesComponent
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
