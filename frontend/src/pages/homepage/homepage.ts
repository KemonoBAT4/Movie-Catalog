import { Component, inject, OnInit, signal } from '@angular/core';
import { ContinueWatchingComponent } from '../../components/continue-watching-component/continue-watching-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { ItemListComponent } from '../../components/item-list-component/item-list-component';
import { MovieListItem } from '../../models/user.model';
import { WebUtilsService } from '../../services/web-utils-service';

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
export class Homepage implements OnInit {

  recently_added_items = signal<MovieListItem[]>([]);
  favourites_items     = signal<MovieListItem[]>([]);

  stars : number[] = [1, 2, 3, 4, 5];

  readonly webUtils = inject(WebUtilsService);

  constructor() { }

  ngOnInit() {
    this.webUtils.get<MovieListItem[]>("/recently-added").subscribe({
      next: (response) => {
        this.recently_added_items.set(response);
      },
      error: (err) => console.error('Error getting recently added items:', err),
    });

    this.webUtils.get<MovieListItem[]>("/favourites").subscribe({
      next: (response) => {
        this.favourites_items.set(response);
      },
      error: (err) => console.error('Error getting favourites items:', err),
    });
  }
}
