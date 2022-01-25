import {combineReducers} from 'redux';
import {userApplicationReducer} from './reducers/userApplicationReducer';
import {allApplicationReducer} from './reducers/allApplicationReducer';
import { authReducer } from './reducers/authReducer';

const reducers = {
  applications: allApplicationReducer,
  userApplications: userApplicationReducer,
  user: authReducer,
};

export const rootReducer = combineReducers(reducers);