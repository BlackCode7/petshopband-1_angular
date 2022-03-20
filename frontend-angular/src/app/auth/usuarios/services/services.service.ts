import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuarios } from '../../model/IUsuarios.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private URL: string = 'http://localhost:3000/usuarios';

  constructor(
    private http: HttpClient
  ) { }

  buscarUsuarios(): Observable<IUsuarios[]>{
    return this.http.get<IUsuarios[]>(this.URL);
  }
  
}
