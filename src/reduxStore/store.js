import { applyMiddleware, compose, createStore,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import webSocketMiddleware from './middlewares/webSocketMiddleware';
import businessGame from "./reducers/shops.reducer";
import logger from "redux-logger";


import { composeWithDevTools } from 'redux-devtools-extension';

import initSaga from "./sagas";
import websocketConnectionSaga from './sagas/webSocket';
//import businessesSaga from "./sagas/business";

const rootReducer = combineReducers({
    businessGame,
  });

const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(
    sagaMiddleware,
    webSocketMiddleware,
    logger
   
  )
]

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(composeWithDevTools())
}

function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      ...enhancers
    ),
  )

  return store
}

const store = configureStore();

// SAGAS
sagaMiddleware.run(initSaga);
sagaMiddleware.run(websocketConnectionSaga);
//sagaMiddleware.run(businessesSaga);



export default store;






