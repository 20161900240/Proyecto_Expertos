import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias(): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/categorias`, {});
  }

  obtenerAplicacionesPorCategoria(idCategoria): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/categorias/${idCategoria}/aplicaciones`, {});
  }

  obtenerDetalleAplicacion(idCategoria, idAplicacion): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/categorias/${idCategoria}/aplicaciones/${idAplicacion}`, {});
  }
  guardarComentario(idCategoria, idAplicacion, data): Observable<any> {
    return this.httpClient.post(`${this.backendHost}/categorias/${idCategoria}/aplicaciones/${idAplicacion}/comentarios`, data);
  }
  guardarAplicacion(idCategoria, data): Observable<any> {
    return this.httpClient.post(`${this.backendHost}/categorias/${idCategoria}/aplicaciones`, data);
  }
}
