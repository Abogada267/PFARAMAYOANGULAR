import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ContadorActions } from '../sales/store/contador/actions';
import { selectContadorValue } from '../sales/store/contador/selectors';


@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrl: './redux.component.scss',
})
  
export class ReduxComponent implements OnDestroy {
  value$: Observable<number>;

  value = 0;

  contadorValueSubscription?: Subscription;

  constructor(private store: Store) {
    this.value$ = this.store.select(selectContadorValue);

   
  }

  ngOnDestroy(): void {
    
  }

  incrementar(): void {
    this.store.dispatch(ContadorActions.incrementar());
  }

  decrementar(): void {
    this.store.dispatch(ContadorActions.decrementar({ cantidad: 1 }));
  }
}
