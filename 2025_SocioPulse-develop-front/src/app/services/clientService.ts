import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // ✅ Import Observable

@Injectable({
  providedIn: 'root'
})
export class ClientHTTP {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  // ✅ Fix: Return an Observable instead of void
  envoyerRequete(url: string, donnees: any): Observable<any> {
    return this.http.post(url, donnees);
  }
}
