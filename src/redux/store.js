import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];
// state değişikliklerini takibe yarayan anlık loglar sunan logger modulü,
// yalnızca development ortamı için uygulanmıştır
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));