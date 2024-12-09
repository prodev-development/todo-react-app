import { createStore } from "redux";
import todoReducer from "./reducers/todo";

const store = createStore(todoReducer);

export default store;
