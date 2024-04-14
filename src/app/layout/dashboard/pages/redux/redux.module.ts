import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReduxComponent } from '../redux/redux.component';


@NgModule({
  declarations: [ReduxComponent],
  imports: [
    CommonModule,
   
    RouterModule.forChild([
      {
        path: '',
        component: ReduxComponent,
      },
    ]),
  ],
})
export class ReduxModule {}