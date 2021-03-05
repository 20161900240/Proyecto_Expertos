import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  // Visualizar categorias
  obtenerCategorias(): Observable<any>{
    return this.httpClient.get(`${this.backendHost}/categorias`, {});
  }

  // Guardar categoria
  guardarCategoria(data): Observable<any>{
    return this.httpClient.post(`${this.backendHost}/categorias`, data);
  }
}
