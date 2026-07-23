import { Component } from '@angular/core';
import { MovieListItem } from '../../models/user.model';


@Component({
  selector: 'app-item-list-component',
  imports: [],
  templateUrl: './item-list-component.html',
  styleUrl: './item-list-component.css',
})
export class ItemListComponent {
  items: MovieListItem[] = [
    { title: 'Past Lives'                , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Top Gun: Maverick'         , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Killers of the Flower Moon', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
    { title: 'Killers of the Flower Moon', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
    { title: 'Kindergarten Cop'          , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },

  ];

  stars = [1, 2, 3, 4, 5];
}