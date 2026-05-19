import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';

@Component({
  selector: 'app-asignatura-alumnos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './asignatura-alumnos.html',
})
export class AsignaturaAlumnos implements OnInit {
  matriculas: Matricula[] = [];
  loading = true;
  asignaturaId: number | null = null;

  constructor(
    private matriculaService: MatriculaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.asignaturaId = +params['id'];
        this.mostrarAlumnos(this.asignaturaId);
      }
    });
  }

  mostrarAlumnos(asignaturaId: number): void {
    this.loading = true;
    this.matriculaService.getMatriculas().subscribe(data => {
      this.matriculas = data.filter(m => m.alumno && m.asignatura?.id === asignaturaId);
      this.loading = false;
    });
  }
  
}
