import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('https://run.mocky.io/v3/98208169-8b5b-41be-8bb1-40ed6102a689');
  }
}
