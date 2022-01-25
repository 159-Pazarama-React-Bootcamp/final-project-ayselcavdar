import * as types from '../actionTypes';

const initialState = {
  loading: false,
  currUser: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
    case types.LOGOUT_START: {
      return {
        ...state,
        login: true,
      };
    }
    case types.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currUser: null,
      };
    }
    case types.SET_USER:{
      return {
        ...state,
        loading:false,
        currUser:action.payload,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currUser: action.payload,
      };
    }
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
