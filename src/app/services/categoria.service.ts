import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  apiUrl = 'https://0ab8ce0ae9f1.ngrok.io'


  constructor(private http: HttpClient) { }

  getCategoria(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(`${this.apiUrl}/api/categoria`);
  }

}
