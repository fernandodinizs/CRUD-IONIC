import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

export interface Fruta { // Export possibilita que ele esteja disponivel em outros locais do projeto.
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root', // Usar Root torna o serviço global.
})
export class CarregarBanco {

  private apiUrl = 'http://localhost:3005/minha-api/frutas'; 
  constructor(private http: HttpClient) {}

  
  listarFrutas(): Observable<Fruta[]> {
    return this.http.get<Fruta[]>(this.apiUrl);
  }

  inserirFruta(fruta: Omit<Fruta, 'id'>): Observable<Fruta> {
    return this.http.post<Fruta>(this.apiUrl, fruta);
  }

  editarFruta(id: number, fruta: Omit<Fruta, 'id'>): Observable<Fruta> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Fruta>(url, fruta);
  }

  excluirFruta(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}