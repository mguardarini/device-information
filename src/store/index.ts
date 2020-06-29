import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from './reducers';
import rootSaga from './sagas/sagas';

export default () => {
  const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
return store;
}
