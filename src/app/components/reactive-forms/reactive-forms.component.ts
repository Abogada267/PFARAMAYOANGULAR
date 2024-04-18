import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  userFormGroup: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder ) {
    this.userFormGroup = this.formBuilder.group({
      
      firstName: this.formBuilder.control(""),
      lastName:this.formBuilder.control (""),
    });
    }
  

}
