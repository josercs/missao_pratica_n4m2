import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: '../livro-lista/livro-lista.component.html',
  styleUrls: ['../livro-lista/livro-lista.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class LivroListaComponent implements OnInit {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];
  
  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
  getEditoraNome(codEditora: number): string {
    const editora = this.servEditora.getEditoras().find((e: { codEditora: number; }) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
  
}
