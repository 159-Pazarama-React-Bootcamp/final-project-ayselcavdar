import { signin } from '../../utils/firebase.utils';
import * as types from '../actionTypes';

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
})

const loginInitiate = (email, password) => {
  return async function (dispatch) {
    try {
      dispatch(loginStart());
      const { user } = await signin(email, password);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };
};

export {setUser, loginInitiate};
