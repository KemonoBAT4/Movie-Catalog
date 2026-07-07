import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socials = [
    { name: 'Instagram', url: 'https://instagram.com', icon: this.svg('M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1 1 0 100 2 1 1 0 000-2z') },
    { name: 'X', url: 'https://x.com', icon: this.svg('M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6 6-6zM17.7 20h1.9L7.4 4h-2l12.3 16z') },
    { name: 'YouTube', url: 'https://youtube.com', icon: this.svg('M22 12s0-3.2-.4-4.7c-.2-.9-1-1.6-1.9-1.8C17.9 5 12 5 12 5s-5.9 0-7.7.5c-.9.2-1.7.9-1.9 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9 1 1.6 1.9 1.8C6.1 19 12 19 12 19s5.9 0 7.7-.5c.9-.2 1.7-.9 1.9-1.8.4-1.5.4-4.7.4-4.7zM10 15V9l5.2 3-5.2 3z') },
  ];

  footerColumns = [
    {
      title: 'Chi siamo',
      links: [
        { label: 'La nostra storia', url: '/about' },
        // { label: 'Carriere', url: '/careers' },
        { label: 'Contatti', url: '/contact' },
      ],
    },
    {
      title: 'Esplora',
      links: [
        { label: 'Film', url: '/movies' },
        { label: 'Serie TV', url: '/series' },
        { label: 'Nuove uscite', url: '/new' },
      ],
    },
    {
      title: 'Supporto',
      links: [
        { label: 'Centro assistenza', url: '/help' },
        { label: 'Stato del servizio', url: '/status' },
        { label: 'Gestisci account', url: '/account' },
      ],
    },
  ];

  legalLinks = [
    { label: 'Privacy'            , url: '/legal/privacy' },
    { label: 'Termini di servizio', url: '/legal/terms'   },
    { label: 'Cookie'             , url: '/legal/cookies' },
  ];

  private svg(path: string): string {
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="${path}"/></svg>`;
  }
}