import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfesorService } from '../../services/profesor-service';
import { Profesor } from '../../model/profesor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css'
})
export class Profesores implements OnInit {
  profesores: Profesor[] = [];
  loading = true;

  constructor(private profesorService: ProfesorService) {}

  ngOnInit(): void {
    this.loadProfesores();
  }

  loadProfesores(): void {
    this.profesorService.getProfesores().subscribe({
      next: (data) => {
        this.profesores = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
