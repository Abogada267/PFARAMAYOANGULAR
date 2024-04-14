import { createFeature, createReducer, on } from '@ngrx/store';
import { Cursos } from '../../cursos/models/index';
import { User } from '../../users/models';
import { Sale } from '../models';
import { SalesActions } from './sales.actions';

export const salesFeatureKey = 'sales';

export interface State {
  sales: Sale[];
  buyers: User[];
  Cursos: Cursos[];
  loading: boolean;
  loadingBuyers: boolean;
  error: unknown;
}

export const initialState: State = {
  sales: [],
  buyers: [],
  Cursos: [],
  loading: false,
  loadingBuyers: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(SalesActions.loadSales, (state) => ({ ...state, loading: true })),
  on(SalesActions.loadSalesSuccess, (state, action) => ({
    ...state,
    loading: false,
    sales: action.data,
  })),
  on(SalesActions.loadSalesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(SalesActions.loadBuyers, (state) => {
    return {
      ...state,
      loadingBuyers: true,
    };
  }),
  on(SalesActions.loadBuyersSuccess, (state, action) => {
    return {
      ...state,
      loadingBuyers: false,
      buyers: action.data,
    };
  }),
  on(SalesActions.loadCursosSuccess, (state, action) => ({
    ...state,
    products: action.data,
  }))
);

export const salesFeature = createFeature({
  name: salesFeatureKey,
  reducer,
});
