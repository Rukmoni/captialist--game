import { put, takeEvery, all } from 'redux-saga/effects'

import actionTypes from "../actionTypes";
import { wsConnect } from "../actions/websocket.action";
import config from "../../config";

function* connectWebsocket() {
    yield put(wsConnect(config.websocketUrl));
}

function* websocketConnectionSaga() {
  console.log("rootsaga")
  yield takeEvery(actionTypes.INIT_GAME, connectWebsocket);
}

export default function* rootSaga() {
  
  yield all([
    websocketConnectionSaga()
  ])
}
