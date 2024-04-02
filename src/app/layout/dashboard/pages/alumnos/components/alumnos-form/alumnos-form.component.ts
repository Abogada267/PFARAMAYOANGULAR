import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss'], 
})
export class AlumnosFormComponent {
  alumno: { apellido: string, nombre: string, email: string } = { apellido: '', nombre: '', email: '' };
  
guardarAlumno($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
  alumnoForm: FormGroup;

  @Output() alumnoSubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.invalid) {
      this.alumnoForm.markAllAsTouched();
    } else {
      this.alumnoSubmitted.emit(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }
}
