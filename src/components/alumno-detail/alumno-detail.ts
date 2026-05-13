import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlumnoService } from '../../services/alumno-service';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-alumno-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alumno-detail.html',
  styleUrl: './alumno-detail.css'
})
export class AlumnoDetail implements OnInit {
  alumno: Alumno | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadAlumno(id);
    }
  }

  loadAlumno(id: number): void {
    // Note: Since we don't have a getAlumnoById, we filter from the list or we'd need a new endpoint
    this.alumnoService.getAlumnos().subscribe(alumnos => {
      this.alumno = alumnos.find(a => a.id === id) || null;
      this.loading = false;
    });
  }
}
