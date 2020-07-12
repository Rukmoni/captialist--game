import { put, takeEvery, all, call, fork, select } from 'redux-saga/effects'

import * as serverActions from '../actions/server.action';
import actionTypes from "../actionTypes";

// Buy Business
function* buyBussiness(action) {
  yield put({ type:actionTypes.WS_MESSAGE, payload: serverActions.buyBusiness(action.payload) });
}

function* buyBusinessSaga() {
  yield takeEvery(actionTypes.BUY_BUSINESS, buyBussiness);
}

// Expand Business
function* expandBusiness(action) {
  yield put({ type:actionTypes.WS_MESSAGE, payload: serverActions.expandBusiness(action.payload) })
}

function* expandBusinessSaga() {
  yield takeEvery(actionTypes.EXPAND_BUSINESS, expandBusiness)
}

// Hire Manager
function* hireManager(action) {
  yield put({ type:actionTypes.WS_MESSAGE, payload: serverActions.hireManager(action.payload) });
}

function* hireManagerSaga() {
  yield takeEvery(actionTypes.HIRE_MANAGER, hireManager)
}

function* hireManagerSuccess(action) {
  const business = action.payload;

  if (business && business.manager === true) {
    yield put({ type:actionTypes.MANAGE_ORDER, payload: business.businessKey })
  }
}

function* hireManagerSuccessSaga() {
  yield takeEvery(actionTypes.HIRE_MANAGER_SUCCESS, hireManagerSuccess)
}

// Manage Order
function* manageOrder(action) {
  yield put({ type:actionTypes.WS_MESSAGE, payload: serverActions.manageOrder(action.payload) });
  const businesses = yield select((state) => state.businessGame.businesses);
  const business = businesses[action.payload];
  if (business && business.manager === true && !business.processingOrder) {
    yield put({ type:actionTypes.MANAGE_ORDER, payload: action.payload })
  }
}

function* manageOrderSaga() {
  yield takeEvery(actionTypes.MANAGE_ORDER_FINISH, manageOrder);
}

export const getIsProcessing = (businessKey) => (state) => state.businessGame.businesses[businessKey].processingOrder;

export const getBusinessTimer = (businessKey) => (state) => state.businessGame.businesses[businessKey].timer;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function manageOrderDelay(businessKey) {
  return function* () {
    let isProcessing = yield select(getIsProcessing(businessKey));
    yield put({ type:actionTypes.WS_MESSAGE, payload: serverActions.manageOrderStart(businessKey) });
    while (isProcessing) {
      yield put({ type:actionTypes.MANAGE_ORDER_TICK, payload: businessKey });
      isProcessing = yield select(getIsProcessing(businessKey));
      yield call(delay, 10);
    }

    yield put({ type:actionTypes.MANAGE_ORDER_FINISH, payload: businessKey });

  }
}

function* manageOrderTimer() {
  yield takeEvery(actionTypes.MANAGE_ORDER, function* (action) {
    yield fork(manageOrderDelay(action.payload))
  })
}

export default function* rootSaga() {
  yield all([
    buyBusinessSaga(),
    manageOrderTimer(),
    manageOrderSaga(),
    expandBusinessSaga(),
    hireManagerSaga(),
    hireManagerSuccessSaga()
  ])
}
