import { Component, OnInit } from '@angular/core';
import { CarregarBanco, Fruta } from '../services/carregar-banco';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gerenciar-fruta',
  templateUrl: './gerenciar-fruta.page.html',
  styleUrls: ['./gerenciar-fruta.page.scss'],
  standalone: false,
})
export class GerenciarFrutaPage implements OnInit {

  frutas: Fruta[] = [];

  novaFruta = {
    nome: '',
    preco: 0,
    quantidade: 0
  };

  modalAberto = false;
  modalAdicionarAberto = false;
  frutaEmEdicao: Fruta = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0
  };

  constructor(
    private carregarBanco: CarregarBanco,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.carregarFrutas();
  }

  carregarFrutas() {
    this.carregarBanco.listarFrutas().subscribe({
      next: (dados) => {
        this.frutas = dados;
      },
      error: (erro) => {
        console.error(erro);
      }
    });
  }

  abrirModalAdicionar() {
    this.modalAdicionarAberto = true;
  }

  fecharModalAdicionar() {
    this.modalAdicionarAberto = false;
  }

  adicionarFruta() {
    this.carregarBanco.inserirFruta({
      nome: this.novaFruta.nome,
      preco: Number(this.novaFruta.preco),
      quantidade: Number(this.novaFruta.quantidade)
    }).subscribe({
      next: () => {
        this.carregarFrutas();
        this.modalAdicionarAberto = false;
        this.novaFruta = {
          nome: '',
          preco: 0,
          quantidade: 0
        };
      },
      error: erro => console.error(erro)
    });

  }

  editarFruta(fruta: Fruta) {
    this.frutaEmEdicao = { ...fruta };
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarEdicao() {
    this.carregarBanco.editarFruta(
      this.frutaEmEdicao.id,
      {
        nome: this.frutaEmEdicao.nome,
        preco: Number(this.frutaEmEdicao.preco),
        quantidade: Number(this.frutaEmEdicao.quantidade)
      }
    ).subscribe({
      next: () => {
        this.carregarFrutas();
        this.modalAberto = false;
      },
      error: erro => console.error(erro)
    });
  }

  excluirFruta(id: number) {

    this.carregarBanco.excluirFruta(id)
      .subscribe({
        next: () => this.carregarFrutas(),
        error: erro => console.error(erro)
      });

  }

}