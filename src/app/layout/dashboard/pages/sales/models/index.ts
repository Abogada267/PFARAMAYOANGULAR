import { Cursos } from '../../cursos/cursos.mock';
import { User } from '../../users/models';

export interface Sale {
  id: string | number;
  userId: string | number;
  productId: string | number;
  user?: User;
  Cursos?: Cursos;
}

export interface CreateSaleData {
  userId: string | number | null;
  productId: string | number | null;
}