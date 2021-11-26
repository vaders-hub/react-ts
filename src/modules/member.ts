import { call, put, select, takeEvery, ForkEffect } from "redux-saga/effects";
import { ResponseGenerator } from "../interface/common";
import { onRegister, onSignin } from "../apis/member";
import { Action, State } from "../interface/state";

const memberActions = {
  SIGN_INFO: "SIGN_INFO",
  SIGN_IN: "SIGN_IN",
  CLEAR_INFO: "CLEAR_INFO",
  SIGN_UP: "SIGN_UP",
};

const initialState = {
  signedIn: false,
  memid: "",
  mempw: "",
};

export const passAuth = (memid: string, mempw: string): any => ({
  type: memberActions.SIGN_INFO,
  memid,
  mempw,
});
export const signIn = (data: string | undefined): any => ({
  type: memberActions.SIGN_IN,
  data,
});
export const clearInfo = (): any => ({
  type: memberActions.CLEAR_INFO,
});
export const getMember = (state: State): State => state.member;

function* signInSaga(): any {
  const { memid, mempw }: any = yield select(getMember);
  const result: ResponseGenerator = yield onSignin(memid, mempw);
  if (result) yield put(signIn(result.message));
  yield put(clearInfo());
}

export function* membersSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(memberActions.SIGN_INFO, signInSaga);
}

const member = (state: any = initialState, action: Action): Action => {
  switch (action.type) {
    case memberActions.SIGN_INFO:
      return {
        ...state,
        memid: action.memid,
        mempw: action.mempw,
      };
    case memberActions.SIGN_IN:
      return {
        ...state,
        signedIn: action.data === "로그인 성공" ? true : false,
      };
    case memberActions.CLEAR_INFO:
      return {
        ...state,
        memid: "",
        mempw: "",
      };
    default:
      return state;
  }
};

export default member;
