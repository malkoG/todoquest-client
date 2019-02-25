import { all } from 'redux-saga/effects';

import todoRoot from './todo'
import authRoot from './auth'
import userRoot from './user'

export default function* rootSaga() {
    yield all([
        todoRoot(),
        authRoot(),
        userRoot()
    ])
}