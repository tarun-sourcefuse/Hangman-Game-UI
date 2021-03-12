import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducer';
import sagas from './redux/saga';
import Router from './router';

// middlewares
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// css
import './index.css';

// create redux store
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('root')
);

export { store, history };
