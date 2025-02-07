import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientHTTP } from '../services/clientService';

@Component({
  selector: 'app-register-page',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  private client: ClientHTTP = inject(ClientHTTP);
  email: string = '';
  name: string = '';
  password: string = '';

  onSubmit() {
    console.log('Données du formulaire:', {name:this.name, email: this.email, password: this.password });
    this.client.envoyerRequete('http://localhost:8000/api/register', {name:this.name, email: this.email, password: this.password });
  }
}
