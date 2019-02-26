import { push } from 'react-router-redux'
import { takeEvery, all, put, call, select } from 'redux-saga/effects'

import { jwtLogin, jwtLogout } from '../api/auth'
import * as authActions from '../actions/auth'

function* login({ username, password }) {
    yield put(authActions.loginUser());

    try {
        const response = yield call(jwtLogin, username, password);
        yield put(authActions.loginSuccess(response.token));

        yield put(push('/today'))
    } catch (err) {
        yield put(authActions.loginFailure(err));
    }
}

function* logout({ token }) {
    yield put(authActions.logoutUser());

    try {
        const data = yield call(jwtLogout, token);
        yield put(authActions.logoutSuccess());

        yield put(push('/login'))
    } catch (err) {
        yield put(authActions.logoutFailure(err));
    }
}

function* loginUser() {
    yield takeEvery(authActions.LOGIN_USER, login);
}

function* logoutUser() {
    yield takeEvery(authActions.LOGOUT_USER, logout);
}


export default function* authRoot() {
    yield all([loginUser(), logoutUser()])
}