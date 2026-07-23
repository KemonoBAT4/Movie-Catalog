import { Component, ElementRef, ViewChild } from '@angular/core';
import { PromoSlide, MovieSlide } from '../../models/user.model';

type HeroSlide = PromoSlide | MovieSlide;

@Component({
  selector: 'app-hero-component',
  imports: [],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  activeIndex = 0;

  slides: HeroSlide[] = [
    {
      type: 'promo',
      title: 'Scopri Nuove Storie',
      subtitle: 'Segui le nuove uscite e personalizza la tua collezione di film sulla homepage.',
      primaryCta: 'Guarda Ora',
      secondaryCta: 'Dettagli',
    },
    {
      type: 'movie',
      title: 'The Northman',
      backgroundUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4655183.avif',
    },
    {
      type: 'movie',
      title: 'Everything Everywhere All At Once',
      backgroundUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4655183.avif',
    },
    {
      type: 'movie',
      title: 'Elinn',
      backgroundUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4655183.avif',
    },
    {
      type: 'movie',
      title: 'Elinn',
      backgroundUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4655183.avif',
    },
    {
      type: 'movie',
      title: 'Elinn',
      backgroundUrl: 'https://s3.zerochan.net/Zhuang.Fangyi.240.4655183.avif',
    },
  ];

  scrollToSlide(index: number) {
    const container = this.scrollContainer.nativeElement;
    const slideEl = container.children[index] as HTMLElement;
    if (slideEl) {
      slideEl.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      this.activeIndex = index;
    }
  }

  onScroll() {
    const container = this.scrollContainer.nativeElement;
    const slideWidth = container.children[0]?.clientWidth ?? 1;
    const gap = 16;
    this.activeIndex = Math.round(container.scrollLeft / (slideWidth + gap));
  }
}