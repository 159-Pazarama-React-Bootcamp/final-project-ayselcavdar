import {combineReducers} from 'redux';
import { authReducer } from './reducers/authReducer';
import applicationReducer from './reducers/applicationReducer';

const reducers = {
  user: authReducer,
  data: applicationReducer,
};

export const rootReducer = combineReducers(reducers);