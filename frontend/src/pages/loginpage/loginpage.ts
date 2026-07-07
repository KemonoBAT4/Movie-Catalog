import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {
  email        : string  = ''   ;
  password     : string  = ''   ;
  rememberMe   : boolean = false;
  isLoading    : boolean = false;
  errorMessage : string  = ''   ;

  readonly auth = inject(AuthService);

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Inserisci email e password.';
      return;
    } 

    this.errorMessage = '';
    this.isLoading    = true;

    this.auth.login(this.email, this.password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Email o password errati.';
      }
    });
  }
}
