import { put, takeEvery, ForkEffect } from "redux-saga/effects";
import { ResponseGenerator } from "../interface/common";
import { onLoad, BoardResponse } from "../apis/bbs";
import { Action, State } from "../interface/state";

const bbsActions = {
  FETCH_LIST: "FETCH_LIST",
  APPLY_LIST: "APPLY_LIST",
};

const initialState: State = {
  bbsList: [],
};

export const fetchList = (): Action => ({ type: bbsActions.FETCH_LIST });
export const applyList = (list: BoardResponse[]): Action => ({
  type: bbsActions.APPLY_LIST,
  list,
});

function* fetchSaga() {
  const result: ResponseGenerator = yield onLoad();
  if (result) {
    yield put(applyList(result.data));
  }
}

export function* bbsSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(bbsActions.FETCH_LIST, fetchSaga);
}

const bbs = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case bbsActions.APPLY_LIST:
      return {
        ...state,
        bbsList: action.list,
      };
    default:
      return state;
  }
};

export default bbs;
