import { combineReducers } from "redux";
import bbs, { bbsSaga } from "./bbs";
import counter, { counterSaga } from "./counter";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  bbs,
  counter,
});

export function* rootSaga() {
  yield all([bbsSaga(), counterSaga()]);
}

export default rootReducer;
