import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno-service';
import { Alumno } from '../../model/alumno';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos implements OnInit {
  alumnos: Alumno[] = [];
  loading = true;
  error: string | null = null;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(): void {
    this.loading = true;
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => {
        this.alumnos = data.sort((a, b) => a.id - b.id);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los alumnos.';
        this.loading = false;
      }
    });
  }
}
