import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

export function* LOGIN({ payload }) {
  console.log(payload);
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOGIN, LOGIN)]);
}
