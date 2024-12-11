import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/todo';

// Workers
function* fetchAllTodos() {
  try {
    const response = yield call(axios.get, `${process.env.REACT_APP_API_URL}/todos`);
    yield put({ type: actionTypes.FETCH_ALL_TODOS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_ALL_TODOS_ERROR, error });
  }
}

function* addTodo(action) {
  try {
    const response = yield call(axios.post, `${process.env.REACT_APP_API_URL}/todos`, action.data);
    yield put({ type: actionTypes.ADD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: actionTypes.ADD_TODO_ERROR, error });
  }
}

function* changeTodo(action) {
  try {
    const { data } = action;
    const response = yield call(axios.put, `${process.env.REACT_APP_API_URL}/todos/${data._id}`, data);
    yield put({ type: actionTypes.CHANGE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: actionTypes.CHANGE_TODO_ERROR, error });
  }
}

function* removeTodo(action) {
  try {
    const { data } = action;
    const response = yield call(axios.delete, `${process.env.REACT_APP_API_URL}/todos/${data._id}`);
    yield put({ type: actionTypes.REMOVE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: actionTypes.REMOVE_TODO_ERROR, error });
  }
}

// Watchers
export function* watchSaga() {
  yield takeEvery(actionTypes.FETCH_ALL_TODOS_START, fetchAllTodos);
  yield takeEvery(actionTypes.ADD_TODO_START, addTodo);
  yield takeEvery(actionTypes.CHANGE_TODO_START, changeTodo);
  yield takeEvery(actionTypes.REMOVE_TODO_START, removeTodo);
}
