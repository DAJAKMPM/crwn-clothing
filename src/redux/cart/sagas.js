import { call, takeLatest, put, all } from "redux-saga/effects";

import { UserActionTypes } from "../user/types";
import { clearCart } from "./actions";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
