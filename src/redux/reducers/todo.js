import * as actionTypes from '../actions/todo';

const initialState = {
  todos: [],
  loading: false,
  error: '',
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
    case actionTypes.ADD_TODO_SUCCESS: {
      const newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos, loading: false };
    }
    case actionTypes.ADD_TODO_ERROR:
      return { ...state, error: action.error, loading: false };

    case actionTypes.CHANGE_TODO_START:
      return { ...state, loading: true };
    case actionTypes.CHANGE_TODO_SUCCESS: {
      const { todos } = state;
      const newTodos = todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo,
      );
      return { ...state, todos: newTodos, loading: false };
    }
    case actionTypes.CHANGE_TODO_ERROR:
      return { ...state, loading: false };

    case actionTypes.REMOVE_TODO_START:
      return { ...state, loading: true };
    case actionTypes.REMOVE_TODO_SUCCESS: {
      const { todos } = state;
      const newTodos = todos.filter((todo) => todo._id !== action.payload._id);
      return { ...state, todos: newTodos, loading: false };
    }
    case actionTypes.REMOVE_TODO_ERROR:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default todo;
