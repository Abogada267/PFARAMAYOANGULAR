import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CursosService } from '../../../../core/services/cursos.service';
import { SaleDialogComponent } from './components/sale-dialog/sale-dialog.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesEffects } from './store/sales.effects';
import { salesFeature } from './store/sales.reducer';

@NgModule({
  declarations: [SalesComponent, SaleDialogComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
      StoreModule.forFeature(salesFeature),
    EffectsModule.forFeature([SalesEffects]),
  ],
  providers: [CursosService],
})
export class SalesModule {}