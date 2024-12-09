import React from "react";

import TodoItem from "../components/todo/Item";
import TodoAdd from "../components/todo/Add";
import { useTodos } from "../store/selectors/todo";

const TodoList = () => {
  const items = useTodos();
  return (
    <div>
      <div className="mb-3">
        <TodoAdd />
      </div>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
