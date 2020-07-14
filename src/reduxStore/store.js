import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import webSocketMiddleware from "./middlewares/webSocketMiddleware";
import logger from "redux-logger";
import initSaga from "./sagas/init.saga";
import businessGame from "./reducers/game.reducer";
import websocketConnectionSaga from "./sagas/webSocket.saga";
import businessesSaga from "./sagas/business.saga";

const rootReducer = combineReducers({
  businessGame,
});

const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware, webSocketMiddleware, logger),
];

function configureStore() {
  const store = createStore(rootReducer, compose(...enhancers));

  return store;
}

const store = configureStore();

// SAGAS
sagaMiddleware.run(initSaga);
sagaMiddleware.run(websocketConnectionSaga);
sagaMiddleware.run(businessesSaga);

export default store;
