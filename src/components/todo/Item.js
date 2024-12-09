import React, { useEffect, useState } from "react";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import Tool from "./Tool";
import { changeTodo, removeTodo } from "../../store/actions/todo";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const [currentItem, setCurrentItem] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  const onComplete = (value) => {
    setCurrentItem({
      ...currentItem,
      date: new Date(),
      checked: value,
    });
  };

  const convertString = ({ date }) => {
    return `${date.toLocaleString()} completed.`;
  };

  const onEdit = () => {
    setIsEditable(true);
  };

  const onRemove = () => {
    const res = confirm("Are you sure you want to delete this item?");
    if (!res) {
      return;
    }
    dispatch(removeTodo(currentItem));
  };

  const onSave = () => {
    dispatch(changeTodo(currentItem));
    setIsEditable(false);
  };
  const onCancel = () => {
    setIsEditable(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: 1, height: 50 }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={currentItem.checked}
            onChange={(e) => onComplete(e.target.checked)}
            color="primary"
          />
        }
        label={
          isEditable ? (
            <TextField
              fullWidth
              label="Todo Text"
              variant="outlined"
              value={currentItem.text || ""}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, text: e.target.value })
              }
            />
          ) : currentItem.checked ? (
            <>
              <Box sx={{ textDecoration: "line-through" }}>{item.text}</Box>
              <Box component="span" typography="caption">
                {convertString(currentItem)}
              </Box>
            </>
          ) : (
            <Box component="span">{item.text}</Box>
          )
        }
      />
      <Box display="flex">
        <Tool
          isVisible={isEditable}
          color="primary"
          onClick={onSave}
          text="Save"
        />
        <Tool
          isVisible={isEditable}
          color="error"
          onClick={onCancel}
          text="Cancel"
        />
        <Tool
          isVisible={!isEditable}
          color="primary"
          onClick={onEdit}
          text="Edit"
        />
        <Tool
          isVisible={!isEditable}
          color="error"
          onClick={onRemove}
          text="Remove"
        />
      </Box>
    </Box>
  );
};

export default TodoItem;
