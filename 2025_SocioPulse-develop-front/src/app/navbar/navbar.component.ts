import {Component, inject} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {HttpClient} from '@angular/common/http';

interface AuthResponse {
  token: string;
}


@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private http: HttpClient = inject(HttpClient);
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Données du formulaire:', result);
        this.http.post<AuthResponse>('http://localhost:8000/api/login', result)
        .subscribe(response => {
          const token = response['token'];
          sessionStorage.setItem('auth_token', token); // Place the token in sessionStorage
        });
      } else {
        console.log('La dialog a été fermée sans soumission.');
      }
    });
  }
}
