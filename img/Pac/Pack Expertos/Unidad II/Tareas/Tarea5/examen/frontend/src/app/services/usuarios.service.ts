import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  // Listar usuarios
  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/usuarios`, {});
  }

  // Obtener un usuario para ver sus pedidos
  obtenerUsuario(idUsuario): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/usuarios/${idUsuario}`, {});
  }

  // Guardar nuevo pedido
  guardarOrden(idUsuario, data): Observable<any>{
    return this.httpClient.post(`${this.backendHost}/usuarios/${idUsuario}/ordenes`, data)
  }
}
