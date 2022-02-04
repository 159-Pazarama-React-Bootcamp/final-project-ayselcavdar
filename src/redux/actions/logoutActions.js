import * as types from '../actionTypes';
import { logout } from '../../utils/firebase.utils';

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const logoutInitiate = () => {
  return async function (dispatch) {
    try {
      dispatch(logoutStart());
      await logout();
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFail(error.message));
    }
  };
};
