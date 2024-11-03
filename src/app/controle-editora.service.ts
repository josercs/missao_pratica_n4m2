import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    new Editora(1, ' Editora Vestígio'),
    new Editora(2, 'Objetiva'),
    new Editora(3, 'Objetiva')
  ];
  servEditora: any;

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora);
    return editora.length ? editora[0].nome : 'Editora não encontrada';
  }
  getEditoraNome(codEditora: number): string {
    const editora = this.servEditora.getEditoras().find((e: { codEditora: number; }) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
  
}
