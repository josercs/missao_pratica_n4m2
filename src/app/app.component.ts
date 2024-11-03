import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component'; 
import { NavbarComponent } from './navbar/navbar.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LivroListaComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para styleUrls
})
export class AppComponent {
  title = 'livros-angular';
}
