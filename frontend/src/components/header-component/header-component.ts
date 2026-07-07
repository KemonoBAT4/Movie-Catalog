import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  imports: [FormsModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isLoggedIn = true;
  userName = 'Marco';
  userAvatarUrl = '/assets/movie_catalog_logo.png';

  isSearchOpen = false;
  searchQuery = '';

  tabs = [
    { name: 'Home', active: true },
    { name: 'Esplora', active: false },
    { name: 'La Mia Raccolta', active: false },
    { name: 'Profilo', active: false },
  ];

  selectTab(selected: { name: string; active: boolean }) {
    this.tabs.forEach(tab => (tab.active = tab === selected));
    // TODO: sostituire con routerLink + routerLinkActive quando aggiungi il routing
  }

  toggleSearch(inputEl: HTMLInputElement) {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      // aspetta la fine dell'animazione CSS prima del focus
      setTimeout(() => inputEl.focus(), 260);
    } else {
      this.searchQuery = '';
    }
  }

  onSearch() {
    if (!this.searchQuery.trim()) return;
    console.log('Ricerca:', this.searchQuery);
    // TODO: emettere evento verso il parent o chiamare un servizio di ricerca
  }
}