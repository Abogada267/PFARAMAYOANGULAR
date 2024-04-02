import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { LoadingService } from '../../../../../core/services/loading.service';

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',
  styleUrls: ['./alumnos-detail.component.scss'],
})
export class AlumnosDetailComponent  {
 userForm: any;
onSubmit: any;
 

  constructor(
    private route: ActivatedRoute,
    private AlumnosService: AlumnosService,
  private loadingService: LoadingService
  ) {

this.loadingService.setIsLoading(true);
    this.AlumnosService.getAlumnoById(this.route.snapshot.params['id']).subscribe({
      next: (findedAlumno: any) => {
        console.log(findedAlumno);
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}