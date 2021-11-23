import { combineReducers } from "redux";
import { AllEffect, ForkEffect, all } from "redux-saga/effects";
import bbs, { bbsSaga } from "./bbs";
import counter, { counterSaga } from "./counter";

const rootReducer = combineReducers({
  bbs,
  counter,
});

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([bbsSaga(), counterSaga()]);
}

export default rootReducer;
