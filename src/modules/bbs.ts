import { put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "../interface/common";
import { onLoad } from "../apis/bbs";

const LIST = "bbs/LIST";
const FETCH_LIST = "bbs/GET_LIST";

const initialState = {
  bbsList: [],
};

export const applyList = (list: object[]) => ({ type: LIST, list });
export const fetchList = () => ({ type: FETCH_LIST });

function* fetchSaga() {
  const result: ResponseGenerator = yield onLoad();
  if (result) yield put(applyList(result.data.body));
}

export function* bbsSaga() {
  yield takeEvery(FETCH_LIST, fetchSaga);
}

const bbs = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        bbsList: action.list,
      };
    default:
      return state;
  }
};

export default bbs;
