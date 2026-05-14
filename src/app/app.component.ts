import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, Header, Footer],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontend';
}
