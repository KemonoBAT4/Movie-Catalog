import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, provideRouter, withComponentInputBinding } from '@angular/router';
import { WebUtilsService } from '../../services/web-utils-service';
import { MovieDetails } from '../../models/user.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-watchpage',
  imports: [],
  templateUrl: './watchpage.html',
  styleUrl: './watchpage.css',
})
export class Watchpage implements OnInit {

  private route = inject(ActivatedRoute);
  movie_id!: string;

  private webUtils = inject(WebUtilsService);

  movie = signal<MovieDetails | null>(null);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor() { }

  ngOnInit() {
    this.movie_id = this.route.snapshot.paramMap.get('id') || '';

    this.webUtils.get<MovieDetails>(`/watch/${this.movie_id}/details`).subscribe({
      next: (response) => {
        this.movie.set({
          ...response,
          streamUrl: `${environment.api_url}${response.streamUrl}` // <-- path relativo diventa assoluto
        });
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Errore caricamento film:', err);
        this.errorMessage.set('Impossibile caricare il film richiesto.');
        this.isLoading.set(false);
      },
    });
  }
}
