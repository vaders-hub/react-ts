import {
  call,
  put,
  take,
  select,
  takeEvery,
  ForkEffect,
} from "redux-saga/effects";
import { ResponseGenerator } from "../interface/common";
import { onSignin } from "../apis/member";
import { Action, State } from "../interface/state";
import { assert } from "console";

const memberActions = {
  SIGN_INFO: "SIGN_INFO",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
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
export const signOut = (): any => ({
  type: memberActions.SIGN_OUT,
});
export const clearInfo = (): any => ({
  type: memberActions.CLEAR_INFO,
});
export const getMember = (state: State): State => state.member;

const callTest = (a: any) => {
  return new Promise((rv, rj) => {
    return a ? rv("1") : rj;
  });
};

function* signInSaga(action: any) {
  // const { memid, mempw }: any = yield select(getMember);
  while (true) {
    try {
      const { memid, mempw }: any = action;
      const pollingAction: ResponseGenerator = yield take(
        memberActions.SIGN_INFO
      );
      console.log("pollingAction", pollingAction);
      const result: ResponseGenerator = yield call(onSignin, memid, mempw);
      if (result) yield put(signIn(result.message));
      const rsp: ResponseGenerator = yield call(callTest, action);
      yield put(clearInfo());
    } catch (e) {
      console.log("e", e);
    }
  }
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
    case memberActions.SIGN_OUT:
      return {
        ...state,
        signedIn: false,
      };
    default:
      return state;
  }
};

export default member;
