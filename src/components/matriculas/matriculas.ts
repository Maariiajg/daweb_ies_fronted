import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaService } from '../../services/matricula-service';
import { Matricula } from '../../model/matricula';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css'
})
export class Matriculas implements OnInit {
  matriculas: Matricula[] = [];
  loading = true;

  constructor(private matriculaService: MatriculaService) {}

  ngOnInit(): void {
    this.matriculaService.getMatriculas().subscribe({
      next: (data) => {
        this.matriculas = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
