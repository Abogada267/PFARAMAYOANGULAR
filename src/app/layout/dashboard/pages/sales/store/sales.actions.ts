import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cursos } from '../../cursos/models/index';
import { User } from '../../users/models';
import { CreateSaleData, Sale } from '../models';

export const SalesActions = createActionGroup({
  source: 'Sales',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: Sale[] }>(),
    'Load Sales Failure': props<{ error: unknown }>(),
    'Load Buyers': emptyProps(),
    'Load Buyers Success': props<{ data: User[] }>(),
    'Load Buyers Failure': props<{ error: unknown }>(),
    'Load Cursos': emptyProps(),
    'Load Cursos Success': props<{ data: Cursos[] }>(),
    'Load Cursos Failure': props<{ error: unknown }>(),
    'Create Sale': props<{ data: CreateSaleData }>(),
    'Create Sale Success': props<{ data: Sale }>(),
    'Create Sale Failure': props<{ error: unknown }>(),
  },
});
