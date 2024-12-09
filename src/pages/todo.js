import React from "react";
import { Box, Divider, Stack } from "@mui/material";

import TodoItem from "../components/todo/TodoItem";
import TodoAdd from "../components/todo/AddItem";
import { useTodos } from "../store/selectors/todo";

const TodoPage = () => {
  const items = useTodos();
  return (
    <Box>
      <TodoAdd />
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((item, index) => (
          <>
            <TodoItem key={index} item={item} />
            <Divider />
          </>
        ))}
      </Stack>
    </Box>
  );
};

export default TodoPage;
