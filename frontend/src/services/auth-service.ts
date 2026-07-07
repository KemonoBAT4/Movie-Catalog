import { inject, Injectable, signal } from '@angular/core';
import { WebUtilsService } from './web-utils-service';
import { User } from '../models/user.model';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  readonly utils = inject(WebUtilsService);
  currentUser    = signal<User | null>(null);

  constructor () {}

  /**
   * executes the login
   * @param email -> the email sent by the user
   * @param password -> the password sent by the user
   * @returns an observable
   */
  login(email: string, password: string) {
    return this.utils.post<{}>("/auth/login", { email, password }).pipe(
      tap(() => this.getCurrentUser().subscribe())
    );
  }

  /**
   * gets the current user info data from the backend
   * @returns <User | null> response
   */
  getCurrentUser() {
    return this.utils.get<User>("/auth/me").pipe(
      tap(user => this.currentUser.set(user)),
      catchError(() => {
        this.currentUser.set(null);
        return of(null);
      })
    )
  }

  /**
   * executes the logout
   * @returns an observable
   */
  logout() {
    return this.utils.post('/api/logout', {}).pipe(
      tap(() => this.currentUser.set(null))
    );
  }

  /**
   * checks if the users is logged in or not
   * @returns boolean -> whether the user is logged in or not
   */
  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}
