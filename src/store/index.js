/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducer from './ducks';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = process.env.NODE_ENV === 'development'
  ? createStore(reducer, compose(applyMiddleware(...middlewares), console.tron.createEnhancer()))
  : createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export { store };
