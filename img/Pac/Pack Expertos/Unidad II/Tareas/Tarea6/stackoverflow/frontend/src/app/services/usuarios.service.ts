import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/usuarios`, {});
  }
  modificarPreguntasDeUsuario(data, idUsuario): Observable<any>{
    return this.httpClient.post(`${this.backendHost}/usuarios/${idUsuario}/preguntas`, data);
  }
}
