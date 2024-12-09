import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { todos } = state;
      const newTodos = todos.concat({ id: uuidv4(), ...action.data });
      return { ...state, todos: newTodos };
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

const store = createStore(reducer);

export default store;
