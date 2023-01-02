import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../models/clienteModel';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  getContacto(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/clientes');
  }
}
