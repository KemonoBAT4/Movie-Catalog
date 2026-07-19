import { Component } from '@angular/core';

interface RecentlyAddedItem {
  title: string;
  posterUrl: string;
  rating: number;
}

@Component({
  selector: 'app-recently-added-component',
  imports: [],
  templateUrl: './recently-added-component.html',
  styleUrl: './recently-added-component.css',
})
export class RecentlyAddedComponent {
  items: RecentlyAddedItem[] = [
    { title: 'Past Lives'                , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Top Gun: Maverick'         , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Killers of the Flower Moon', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
    { title: 'Killers of the Flower Moon', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
    { title: 'Kindergarten Cop'          , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
      { title: 'Top Gun: Maverick'         , posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.8 },
    { title: 'Killers of the Flower Moon', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
    { title: 'Killers of the Flower Moon', posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif', rating: 4.6 },
    
  ];

  stars = [1, 2, 3, 4, 5];
}