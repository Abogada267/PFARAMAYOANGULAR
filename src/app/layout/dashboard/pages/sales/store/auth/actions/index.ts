import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cursos } from '../../../../cursos/cursos.mock';


export const AuthActions= createActionGroup({
  source: 'Auth',
  events: {
    'Set auth cursos': props<{ Cursos: Cursos }>(),
    logout: emptyProps(),
  },
});