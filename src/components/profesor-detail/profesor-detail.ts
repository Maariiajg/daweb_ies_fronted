import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfesorService } from '../../services/profesor-service';
import { Profesor } from '../../model/profesor';

@Component({
  selector: 'app-profesor-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profesor-detail.html',
  styleUrl: './profesor-detail.css'
})
export class ProfesorDetail implements OnInit {
  profesor: Profesor | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private profesorService: ProfesorService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.profesorService.getProfesores().subscribe(profesores => {
        this.profesor = profesores.find(p => p.id === id) || null;
        this.loading = false;
      });
    }
  }
}
