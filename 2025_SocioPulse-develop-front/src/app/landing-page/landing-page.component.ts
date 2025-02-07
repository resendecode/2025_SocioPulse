import {Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {ClientHTTP} from '../services/clientService';

@Component({
  selector: 'app-root',
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  private client: ClientHTTP = inject(ClientHTTP);
  constructor(private dialog: MatDialog, client:ClientHTTP) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Données du formulaire:', result);
        this.client.envoyerRequete('http://localhost:8000/api/login', result);
      } else {
        console.log('La dialog a été fermée sans soumission.');

      }
    });
  }
}
