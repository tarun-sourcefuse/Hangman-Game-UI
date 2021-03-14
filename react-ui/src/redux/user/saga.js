import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { login } from '../../services/axios/user';

export function* LOGIN({ email }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  });

  const user = yield call(login, { email }) || {};

  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
      email: user?.email,
    },
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOGIN, LOGIN)]);
}
