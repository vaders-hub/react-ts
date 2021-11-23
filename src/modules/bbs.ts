import { put, takeEvery, ForkEffect } from "redux-saga/effects";
import { ResponseGenerator } from "../interface/common";
import { onLoad, BoardResponse } from "../apis/bbs";

type ActionTypes = {
  type: string;
  list?: BoardResponse[];
};

type StateTypes = {
  bbsList: BoardResponse[] | undefined;
};

const bbsActions = {
  FETCH_LIST: "FETCH_LIST",
  APPLY_LIST: "APPLY_LIST",
};

const initialState: StateTypes = {
  bbsList: [],
};

export const fetchList = (): ActionTypes => ({ type: bbsActions.FETCH_LIST });
export const applyList = (list: BoardResponse[]): ActionTypes => ({
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
const bbs = (
  state: StateTypes = initialState,
  action: ActionTypes
): StateTypes => {
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
