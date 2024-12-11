import * as actionTypes from "../actions/todo";

const initialState = {
  loading: false,
  todos: [],
  error: "",
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_TODOS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_ALL_TODOS_SUCCESS:
      return { ...state, todos: action.payload, loading: false };
    case actionTypes.FETCH_ALL_TODOS_ERROR:
      return { ...state, error: action.error, loading: false };

    case actionTypes.ADD_TODO_START:
      return { ...state, loading: true };
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    case actionTypes.ADD_TODO_ERROR:
      return { ...state, error: action.error, loading: false };

    case actionTypes.CHANGE_TODO_START:
      return { ...state, loading: true };
    case actionTypes.CHANGE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo,
        ),
        loading: false,
      };
    case actionTypes.CHANGE_TODO_ERROR:
      return { ...state, loading: false };

    case actionTypes.REMOVE_TODO_START:
      return { ...state, loading: true };
    case actionTypes.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
        loading: false,
      };
    case actionTypes.REMOVE_TODO_ERROR:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default todo;
