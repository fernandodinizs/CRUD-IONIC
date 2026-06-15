import { Component } from '@angular/core';
import { CarregarBanco, Fruta } from '../services/carregar-banco';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  
  frutas: Fruta[] = [];
  erro = '';

  constructor( private carregarBanco: CarregarBanco ) {
  }
  
  ionViewWillEnter() {
    this.carregarBanco.listarFrutas().subscribe({
      next: (data) => {
        this.frutas = data;
        this.erro = '';
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Falha ao carregar frutas! Verifique se a API está online (node .\\server-api.js)';
      }
    });
  }

}
