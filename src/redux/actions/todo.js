import apiActions from "../apiActions";
import * as apis from "../apis/todo";

export const FETCH_ALL_TODOS_START = "FETCH_ALL_TODOS_START";
export const FETCH_ALL_TODOS_SUCCESS = "FETCH_ALL_TODOS_SUCCESS";
export const FETCH_ALL_TODOS_ERROR = "FETCH_ALL_TODOS_ERROR";
export const fetchAllTodos = () =>
  apiActions(
    FETCH_ALL_TODOS_START,
    FETCH_ALL_TODOS_SUCCESS,
    FETCH_ALL_TODOS_ERROR,
    apis.fetchAllTodos(),
  );

export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const addTodo = (data) =>
  apiActions(
    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    apis.addTodo(data),
  );

export const CHANGE_TODO_START = "CHANGE_TODO_START";
export const CHANGE_TODO_SUCCESS = "CHANGE_TODO_SUCCESS";
export const CHANGE_TODO_ERROR = "CHANGE_TODO_ERROR";
export const changeTodo = (data) =>
  apiActions(
    CHANGE_TODO_START,
    CHANGE_TODO_SUCCESS,
    CHANGE_TODO_ERROR,
    apis.changeTodo(data),
  );

export const REMOVE_TODO_START = "REMOVE_TODO_START";
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS";
export const REMOVE_TODO_ERROR = "REMOVE_TODO_ERROR";
export const removeTodo = (data) =>
  apiActions(
    REMOVE_TODO_START,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_ERROR,
    apis.removeTodo(data),
  );
