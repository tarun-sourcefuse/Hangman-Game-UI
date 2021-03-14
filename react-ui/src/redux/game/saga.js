import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { createGameSession, guessWord } from '../../services/axios/game';

export function* START_GAME({ email }) {
  yield put({
    type: 'game/SET_STATE',
    payload: {
      loading: true,
    },
  });

  const game = yield call(createGameSession, { email }) || {};

  yield put({
    type: 'game/SET_STATE',
    payload: {
      loading: false,
      ...game,
    },
  });
}

export function* ATTEMPT({ email, character }) {
  yield put({
    type: 'game/SET_STATE',
    payload: {
      loading: true,
    },
  });

  const game = yield call(guessWord, { email, character }) || {};

  yield put({
    type: 'game/SET_STATE',
    payload: {
      loading: false,
      ...game,
    },
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.START_GAME, START_GAME)]);
  yield all([takeEvery(actions.ATTEMPT, ATTEMPT)]);
}
