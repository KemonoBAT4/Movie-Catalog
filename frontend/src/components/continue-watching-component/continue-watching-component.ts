import { Component } from '@angular/core';
import { ContinueWatchingItem } from '../../models/user.model';

@Component({
  selector: 'app-continue-watching-component',
  imports: [],
  templateUrl: './continue-watching-component.html',
  styleUrl: './continue-watching-component.css',
})
export class ContinueWatchingComponent {
  items: ContinueWatchingItem[] = [
    {
      title: 'Dune: Part One',
      posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif',
      minutesRemaining: 45,
      progressPercent: 65,
    },
    {
      title: 'Oppenheimer',
      posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif',
      minutesRemaining: 72,
      progressPercent: 40,
    },
    {
      title: 'Blade Runner 2049',
      posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif',
      minutesRemaining: 121,
      progressPercent: 15,
    },
    {
      title: 'Blade Runner 2049',
      posterUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif',
      minutesRemaining: 121,
      progressPercent: 15,
    },
  ];

  formatRemaining(minutes: number): string {
    if (minutes < 60) return `${minutes} min rimangono`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins.toString().padStart(2, '0')} min rimangono`;
  }
}