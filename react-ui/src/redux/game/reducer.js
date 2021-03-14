import actions from './actions';

const initialState = {
  word: null,
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
