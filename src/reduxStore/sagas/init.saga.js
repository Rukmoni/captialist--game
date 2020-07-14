import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchInit } from "../../clickerGame/utlis";

import actionTypes from '../actionTypes';

function* initGame() {
  console.log("initGame");
  try {
    const initRes = yield call(fetchInit);
    yield put({ type: actionTypes.INIT_GAME_SUCCESS, payload: initRes.data });
    if (initRes.data.gameState.businesses) {
      const length = initRes.data.gameState.businesses.length
      for (let index = 0; index < length; index++) {
        const business = initRes.data.gameState.businesses[index];
        if (business.manager === true) {
          yield put({ type: actionTypes.MANAGE_ORDER, payload: business.businessKey })
        }
      }
    }
  } catch (e) {
    yield put({ type: actionTypes.INIT_GAME_ERROR, payload: e.message });
  }
}

function* initSaga() {
  console.log("initsaga");
  yield takeEvery(actionTypes.WS_CONNECTED, initGame);
}

export default initSaga;
