import {
  all,
  call,
  put,
  take,
  fork,
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
  try {
    const { memid, mempw }: any = action;
    const result: ResponseGenerator = yield call(onSignin, memid, mempw);

    yield put({
      type: memberActions.SIGN_IN,
      payload: result,
    });
    yield call(callTest, action);
    yield put(clearInfo());
  } catch (e) {
    console.log("e", e);
  }
}

function* takeTest(action: any) {
  const pollingAction: ResponseGenerator = yield take(memberActions.SIGN_IN);
  const pollingStatus = pollingAction.payload.status;
  console.log("pollingAction", pollingAction);
}

export function* membersSaga(): any {
  yield takeEvery(memberActions.SIGN_INFO, signInSaga);
  // yield all([fork(takeTest, memberActions.SIGN_INFO)]);
}

const member = (state: any = initialState, action: Action): Action => {
  console.log("action", action);
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
        signedIn: action.payload.message === "로그인 성공" ? true : false,
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
