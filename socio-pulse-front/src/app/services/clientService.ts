import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientHTTP{
  private http: HttpClient = inject(HttpClient);
  constructor () {}
  envoyerRequete(url: string, donnees: any): void {
    this.http.post(url, donnees);
  }
}
