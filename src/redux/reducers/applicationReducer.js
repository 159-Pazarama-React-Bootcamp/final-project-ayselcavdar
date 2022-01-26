import * as types from '../actionTypes';

const initialStates = {
  applications: [],
  loading: false,
  error: null,
};

const applicationReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case types.GET_APPLICATIONS_START:
    case types.CREATE_APPLICATION_START:
    case types.DELETE_APPLICATION_START:
    case types.EDIT_APPLICATION_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        applications: payload,
      };
    case types.CREATE_APPLICATION_SUCCESS:
    case types.DELETE_APPLICATION_SUCCESS:
    case types.EDIT_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_APPLICATIONS_FAIL:
    case types.CREATE_APPLICATION_FAIL:
    case types.DELETE_APPLICATION_FAIL:
    case types.EDIT_APPLICATION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default applicationReducer;
