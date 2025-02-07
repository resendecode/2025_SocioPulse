import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientHTTP } from '../services/clientService';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-register-page',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  private client: ClientHTTP = inject(ClientHTTP);
  private router: Router = inject(Router);
  email: string = '';
  name: string = '';
  password: string = '';

  onSubmit() {
    console.log('Données du formulaire:', { name: this.name, email: this.email, password: this.password });

    this.client.envoyerRequete('http://localhost:8000/api/register', {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        console.log("Inscription réussie!");
        this.router.navigate(['/']);  // ✅ Redirect to home after success
      },
      error: (error) => {
        console.error("Erreur lors de l'inscription:", error);
      }
    });
  }


}
