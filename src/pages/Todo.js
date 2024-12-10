import React, { useCallback, useEffect } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { useDispatch } from "react-redux";

import TodoItem from "../components/todo/TodoItem";
import TodoAdd from "../components/todo/AddItem";
import { useTodos } from "../redux/selectors/todo";
import {
  addTodo,
  changeTodo,
  fetchAllTodos,
  removeTodo,
} from "../redux/actions/todo";

const TodoPage = () => {
  const dispatch = useDispatch();
  const items = useTodos();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  const handleAdd = useCallback(
    (data) => {
      dispatch(addTodo(data));
    },
    [dispatch],
  );

  const handleEdit = useCallback(
    (data) => {
      dispatch(changeTodo(data));
    },
    [dispatch],
  );

  const handleRemove = useCallback(
    (data) => {
      dispatch(removeTodo(data));
    },
    [dispatch],
  );

  return (
    <Box>
      <TodoAdd onAdd={handleAdd} />
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((item, index) => (
          <>
            <TodoItem
              key={index}
              item={item}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
            <Divider />
          </>
        ))}
      </Stack>
    </Box>
  );
};

export default TodoPage;
