import { combineReducers } from 'redux';
import user from './user/reducer';
import game from './game/reducer';

export default () =>
  combineReducers({
    user,
    game,
  });
