import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatriculaDetail } from './matricula-detail';
import { RouterModule } from '@angular/router';

describe('MatriculaDetail', () => {
  let component: MatriculaDetail;
  let fixture: ComponentFixture<MatriculaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaDetail, RouterModule.forRoot([])]
    }).compileComponents();
    fixture = TestBed.createComponent(MatriculaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
