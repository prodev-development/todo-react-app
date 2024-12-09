import React from "react";

import TodoItem from "./Item";
import TodoAdd from "./Add";
import { useTodos } from "../../selectors/todo";

function TodoList() {
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
}

export default TodoList;
