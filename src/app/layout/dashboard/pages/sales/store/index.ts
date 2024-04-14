import { featureName as contadorFeatureName, contadorReducer } from "../store/contador/reducers";
import { featureName as authFeatureName, authReducer } from './auth/reducers';

export const appReducers = {
  [contadorFeatureName]: contadorReducer,
  [authFeatureName]: authReducer,
};
