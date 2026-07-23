import { Component } from '@angular/core';
import { ContinueWatchingComponent } from '../../components/continue-watching-component/continue-watching-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { ItemListComponent } from '../../components/item-list-component/item-list-component';

@Component({
  selector: 'app-homepage',
  imports: [
    ContinueWatchingComponent,
    HeroComponent,
    ItemListComponent
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
