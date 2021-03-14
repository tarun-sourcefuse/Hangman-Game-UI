import { all } from 'redux-saga/effects';
import user from './user/saga';
import game from './game/saga';

export default function* rootSaga() {
  yield all([user(), game()]);
}
