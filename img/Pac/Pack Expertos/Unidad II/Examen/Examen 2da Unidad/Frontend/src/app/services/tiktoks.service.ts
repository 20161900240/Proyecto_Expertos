import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiktoksService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  obtenerTiktoks(): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/tiktoks`, {});
  }

  obtenerComentariosTiktok(idTiktok): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/tiktoks/${idTiktok}/comentarios`, {});
  }

  guardarComentarioTiktok(idTiktok, data): Observable<any> {
    return this.httpClient.post(`${this.backendHost}/tiktoks/${idTiktok}/comentarios`, data);
  }

  guardarTiktok(data): Observable<any> {
    return this.httpClient.post(`${this.backendHost}/tiktoks`, data);
  }

}
