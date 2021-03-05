import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  // Login Usuario
  loginUsuario(data): Observable<any> {
    return this.httpClient.post(`${this.backendHost}/usuarios/login`, data);
  }

  // Verificar login
  loggedIn(): boolean {
    if (localStorage.getItem('token') && localStorage.getItem('idUsuario')) {
      return true;
    }
    return false;
  }
  // Cerrar sesion
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('idUsuario');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getIDUsuario() {
    return localStorage.getItem('idUsuario');
  }
}
