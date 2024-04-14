import { createReducer, on } from '@ngrx/store';
import { Cursos } from '../../../../cursos/cursos.mock';
import { AuthActions } from '../actions';


export const featureName = 'auth';

export interface AuthState {
  Cursos: Cursos | null;
}

const initialState: AuthState = {
  Cursos: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuthCursos, (state, action) => {
    return {
      ...state,
      cursos: action.Cursos,
    };
  }),
  on(AuthActions.logout, () => initialState)
);