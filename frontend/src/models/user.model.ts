export interface User {
  name     : string;
  surname  : string;
  username : string;
  email    : string;
}

export interface PromoSlide {
  type         : 'promo';
  title        : string;
  subtitle     : string;
  primaryCta   : string;
  secondaryCta : string;
}

export interface MovieSlide {
  type          : 'movie';
  title         : string;
  backgroundUrl : string;
}

export interface ContinueWatchingItem {
  title            : string;
  posterUrl        : string;
  minutesRemaining : number;
  progressPercent  : number;
}

export interface MovieListItem {
  title     : string;
  posterUrl : string;
  rating    : number;
}