import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
} from "../actions/todo";

const initialState = {
  loading: false,
  todos: [],
  error: "",
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START: {
      return { ...state, loading: true };
    }
    case ADD_TODO_SUCCESS: {
      return { ...state, loading: false };
    }
    case ADD_TODO_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    case "CHANGE_TODO": {
      const { todos } = state;
      const newTodos = todos.map((todo) =>
        todo.id === action.data.id ? action.data : todo,
      );
      return { ...state, todos: newTodos };
    }
    case "REMOVE_TODO": {
      const { todos } = state;
      const newTodos = todos.filter((todo) => todo.id !== action.data.id);
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
};

export default todo;
