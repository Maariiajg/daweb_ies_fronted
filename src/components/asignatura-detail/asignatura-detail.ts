import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura-service';
import { Asignatura } from '../../model/asignatura';

@Component({
  selector: 'app-asignatura-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './asignatura-detail.html',
  styleUrl: './asignatura-detail.css'
})
export class AsignaturaDetail implements OnInit {
  asignatura: Asignatura | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private asignaturaService: AsignaturaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.asignaturaService.getAsignaturas().subscribe(list => {
        this.asignatura = list.find(a => a.id === id) || null;
        this.loading = false;
      });
    }
  }
}
