import { takeEvery, all, put, call, select } from 'redux-saga/effects'

import * as todoActions  from '../actions/todo'


export default function* todoRoot() {
    yield all([])
}