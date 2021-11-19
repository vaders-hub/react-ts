import { put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "../interface/common";
import { onLoad } from "../apis/bbs";

const LIST = "member/LIST";
const SIGN_UP = "member/SIGN_UP";

const initialState = {
  bbsList: [],
};

export const applyList = (list: object[]) => ({ type: LIST, list });
export const signUp = () => ({ type: SIGN_UP });

function* signupSaga() {
  const result: ResponseGenerator = yield onLoad();
  if (result) yield put(applyList(result.data.body));
}

export function* memberSaga() {
  yield takeEvery(SIGN_UP, signupSaga);
}

const member = (state: any = initialState, action: any) => {
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

export default member;
