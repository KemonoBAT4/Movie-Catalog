import { Component } from '@angular/core';

interface MovieCard {
  title: string;
  posterUrl: string;
  rating: number; // es. 4.8
}

@Component({
  selector: 'app-favourites-component',
  imports: [],
  templateUrl: './favourites-component.html',
  styleUrl: './favourites-component.css',
})
export class FavouritesComponent {
  movies: MovieCard[] = [
    { title: 'Interstellar' , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Inception'    , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Parasite'     , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Pulp Fiction' , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Spirited Away', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
  ];

  stars = [1, 2, 3, 4, 5];
}