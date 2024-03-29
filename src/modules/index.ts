import { combineReducers } from "redux";
import { AllEffect, ForkEffect, all } from "redux-saga/effects";
import bbs, { bbsSaga } from "./bbs";
import counter, { counterSaga } from "./counter";
import member, { membersSaga } from "./member";
import lang from "./lang";

const rootReducer = combineReducers({
  bbs,
  counter,
  lang,
  member,
});

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([bbsSaga(), counterSaga(), membersSaga()]);
}

export default rootReducer;
