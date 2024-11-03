import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  incluirLivro(livro: Livro) {
    throw new Error('Method not implemented.');
  }
  private livros: Livro [] = [
    new Livro(1, 1, 'Hábitos Atômicos', 'James Clear mostra como pequenos hábitos podem transformar sua vida. Com dicas práticas, ele ensina a construir bons hábitos, eliminar os ruins e alcançar grandes resultados, um passo de cada vez.', ['James Clear']),
    new Livro(2, 2, 'O Poder do Hábito', 'Charles Duhigg revela como os hábitos moldam quem somos e ensina a mudá-los para melhor. Com histórias reais e ciência, ele mostra como reprogramar seus comportamentos para alcançar seus objetivos.', ['Charles Duhigg']),
    new Livro(3, 3, 'Mindset: A Nova Psicologia do Sucesso', 'Carol Dweck explica como nossas crenças sobre nossas habilidades afetam nosso sucesso,podemos aprender, evoluir e encarar desafios de forma positiva.', ['Carol S. Dweck'])
  ];


  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index > -1) {
      this.livros.splice(index, 1);
    }
  }
}

