import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToLista() {
    this.router.navigate(['/lista']);
  }

  navigateToDados() {
    this.router.navigate(['/dados']);
  }
}
