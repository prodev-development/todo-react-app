import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { addTodo } from "../../actions/todo";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onAdd = () => {
    dispatch(addTodo({ text: value }));
  };

  return (
    <div className="d-flex align-items-center">
      <div className="me-3 w-100">
        <TextField
          fullWidth
          label="Todo Text"
          variant="outlined"
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={onAdd}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default TodoAdd;
