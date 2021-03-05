import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HashtagsService {
  backendHost: string = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  obtenerHashtags(): Observable<any> {
    return this.httpClient.get(`${this.backendHost}/hashtags`, {});
  }

  verificarNuevoHashtag(data): Observable<any> {
    return this.httpClient.post(`${this.backendHost}/hashtags`, data);
  }
}
