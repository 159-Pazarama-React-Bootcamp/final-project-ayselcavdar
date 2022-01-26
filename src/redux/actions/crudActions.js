import * as types from '../actionTypes';
import {
  getDatabase,
  onValue,
  push,
  query,
  ref,
  remove,
  set,
} from 'firebase/database';

const createApplicationStart = () => ({
  type: types.CREATE_APPLICATION_START,
});

const createApplicationSuccess = () => ({
  type: types.CREATE_APPLICATION_SUCCESS,
});

const createApplicationFail = (error) => ({
  type: types.CREATE_APPLICATION_FAIL,
  payload: error,
});

const getApplicationsStart = () => ({
  type: types.GET_APPLICATIONS_START,
});

const getApplicationsSuccess = (applications) => ({
  type: types.GET_APPLICATIONS_SUCCESS,
  payload: applications,
});

const getApplicationsFail = (error) => ({
  type: types.GET_APPLICATIONS_FAIL,
  payload: error,
});

const deleteApplicationStart = () => ({
  type: types.DELETE_APPLICATION_START,
});

const deleteApplicationSuccess = () => ({
  type: types.DELETE_APPLICATION_SUCCESS,
});

const deleteApplicationFail = (error) => ({
  type: types.DELETE_APPLICATION_FAIL,
  payload: error,
});

const editApplicationStart = () => ({
  type: types.EDIT_APPLICATION_START,
});

const editApplicationSuccess = () => ({
  type: types.EDIT_APPLICATION_SUCCESS,
});

const editApplicationFail = (error) => ({
  type: types.EDIT_APPLICATION_FAIL,
  payload: error,
});

const createApplication = (application) => {
  return function (dispatch) {
    dispatch(createApplicationStart());
    const db = getDatabase();
    const appRef = ref(db, 'userApplications');
    const newAppRef = push(appRef);
    try {
      set(newAppRef, {
        ...application,
        isAdmin: false,
        isUser: true,
        hasResponse: false,
        responseText: '',
        status: 'EVALUATING',
      });
      dispatch(createApplicationSuccess());
    } catch (error) {
      dispatch(createApplicationFail(error.message));
    }
  };
};

const getApplications = () => {
  return function (dispatch) {
    dispatch(getApplicationsStart());
    const db = getDatabase();
    const appRef = ref(db, 'userApplications');
    onValue(query(appRef), (snapshot) => {
      try {
        const applicationList = snapshot.val();
        let appArr = [];
        for (let id in applicationList) {
          appArr.push({ id, ...applicationList[id] });
        }
        dispatch(getApplicationsSuccess(appArr));
      } catch (error) {
        dispatch(getApplicationsFail(error.message));
      }
    });
  };
};

const deleteApplication = (id) => {
  return function (dispatch) {
    dispatch(deleteApplicationStart());
    const db = getDatabase();
    const appRef = ref(db, 'userApplications/' + id);
    remove(appRef)
    .then(() => dispatch(deleteApplicationSuccess()))
    .catch((error) => dispatch(deleteApplicationFail(error.message)));
  };
};

const editApplication = (data) => {
  return function (dispatch) {
    dispatch(editApplicationStart());
    const db = getDatabase();
    set(ref(db, 'userApplications/' + data.id), data)
      .then(() => {
        dispatch(editApplicationSuccess());
      })
      .catch((error) => {
        dispatch(editApplicationFail(error.message));
      });
  };
};

export { getApplications, createApplication, deleteApplication, editApplication };
