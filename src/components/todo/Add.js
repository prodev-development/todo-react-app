import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

import { addTodo } from "../../actions/todo";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onAdd = () => {
    dispatch(addTodo({ text: value }));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      sx={{ mb: 3 }}
    >
      <TextField
        fullWidth
        label="Todo Text"
        variant="outlined"
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: 3, width: 100 }}
        onClick={onAdd}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoAdd;
