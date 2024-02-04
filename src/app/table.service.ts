import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseURL = 'http://localhost:8080/api/usuarios'

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.baseURL)
  }
}
