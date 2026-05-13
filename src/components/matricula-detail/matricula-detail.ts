import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatriculaService } from '../../services/matricula-service';
import { Matricula } from '../../model/matricula';

@Component({
  selector: 'app-matricula-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './matricula-detail.html',
  styleUrl: './matricula-detail.css'
})
export class MatriculaDetail implements OnInit {
  matricula: Matricula | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private matriculaService: MatriculaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.matriculaService.getMatriculas().subscribe(list => {
        this.matricula = list.find(m => m.idMat === id) || null;
        this.loading = false;
      });
    }
  }
}
