import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatLabel} from '@angular/material/form-field';
import {MatError} from '@angular/material/form-field';
import {HttpClient} from '@angular/common/http';
import {MatDialogActions} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-maker',
  templateUrl: './project-maker.component.html',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    MatDialogActions,
    MatButton
  ],
  styleUrls: ['./project-maker.component.scss']
})
export class ProjectMakerComponent {
  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);
  project = {
    name: '',
    department: '',
    city: '',
    description: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Project data:', this.project);
      this.http.post('http://localhost:8000/api/projects', this.project).subscribe(
        response => console.log(response), 
        error => console.log(error));;;
      this.router.navigate(['/']);
    }
  }
}
