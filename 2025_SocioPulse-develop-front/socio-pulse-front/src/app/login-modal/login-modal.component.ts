import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatError, MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatLabel} from '@angular/material/form-field';
@Component({
  selector: 'app-login-modal',
  imports: [
    MatError,
    FormsModule,
    MatFormField,
    MatDialogTitle,
    MatDialogContent,
    MatInput,
    MatButton,
    MatDialogActions,
    MatLabel,
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  // Propriétés liées au formulaire via ngModel
  email: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) {}

  // Ferme la dialog sans renvoyer de données
  onCancel(): void {
    this.dialogRef.close();
  }

  // Soumet le formulaire et renvoie les données si le formulaire est valide
  onSubmit(form: any): void {
    if (form.valid) {
      this.dialogRef.close({ email: this.email, password: this.password });
    }
  }

}
