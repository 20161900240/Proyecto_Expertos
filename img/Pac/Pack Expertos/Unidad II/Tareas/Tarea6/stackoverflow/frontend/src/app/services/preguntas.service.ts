import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  obtenerPreguntas(): Observable<any>{
    return this.httpClient.get(`${this.backendHost}/preguntas`, {});
  }

  obtenerRespuestas(idPregunta): Observable<any>{
    return this.httpClient.get(`${this.backendHost}/preguntas/${idPregunta}/respuestas`, {});
  }

  guardarPregunta(data): Observable<any>{
    return this.httpClient.post(`${this.backendHost}/preguntas`, data);
  }
}
