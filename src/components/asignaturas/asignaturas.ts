import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturaService } from '../../services/asignatura-service';
import { Asignatura } from '../../model/asignatura';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './asignaturas.html',
  styleUrl: './asignaturas.css'
})
export class Asignaturas implements OnInit {
  asignaturas: Asignatura[] = [];
  loading = true;

  constructor(private asignaturaService: AsignaturaService) {}

  ngOnInit(): void {
    this.mostrarTodas();
  }

  mostrarTodas(): void {
    this.asignaturaService.getAsignaturas().subscribe({
      next: (data) => {
        this.asignaturas = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  


}
 