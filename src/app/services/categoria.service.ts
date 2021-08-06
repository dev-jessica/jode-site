import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  apiUrl = 'https://48f20b87c3e3.ngrok.io'


  constructor(private http: HttpClient) { }

  getCategoria(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(`${this.apiUrl}/api/categoria`);
  }

}
