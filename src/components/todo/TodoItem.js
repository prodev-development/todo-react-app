import React, { useEffect, useState, memo, useCallback } from "react";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

import Tool from "./TodoActionBtn";

const TodoItem = ({ item, onEdit, onRemove }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setCurrentItem({ ...item });
  }, [item]);

  const convertString = useCallback(
    ({ date }) => `${date.toLocaleString()} completed.`,
    [],
  );

  const handleComplete = useCallback(
    (value) => {
      const completedItem = {
        ...currentItem,
        date: new Date(),
        checked: value,
      };
      onEdit(completedItem);
    },
    [onEdit, currentItem],
  );

  const handleEdit = useCallback(() => {
    setIsEditable(true);
  }, []);

  const handleRemove = useCallback(() => {
    // const res = confirm("Are you sure you want to delete this item?");
    // if (!res) {
    //   return;
    // }
    onRemove(currentItem);
  }, [onRemove, currentItem]);

  const handleSave = useCallback(() => {
    if (currentItem.text.trim() === "") {
      return;
    }
    onEdit(currentItem);
    setIsEditable(false);
  }, [onEdit, currentItem]);

  const handleCancel = useCallback(() => {
    setIsEditable(false);
    setCurrentItem({ ...item });
  }, []);

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
            onChange={(e) => handleComplete(e.target.checked)}
            color="primary"
          />
        }
        label={
          isEditable ? (
            <TextField
              fullWidth
              label="Todo Text"
              variant="outlined"
              value={currentItem.title || ""}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, title: e.target.value })
              }
            />
          ) : currentItem.checked ? (
            <>
              <Box sx={{ textDecoration: "line-through" }}>{item.title}</Box>
              <Box component="span" typography="caption">
                {convertString(currentItem)}
              </Box>
            </>
          ) : (
            <Box component="span">{item.title}</Box>
          )
        }
      />
      <Box display="flex">
        <Tool
          isVisible={isEditable}
          color="primary"
          onClick={handleSave}
          title="Save"
        />
        <Tool
          isVisible={isEditable}
          color="error"
          onClick={handleCancel}
          title="Cancel"
        />
        <Tool
          isVisible={!isEditable}
          color="primary"
          onClick={handleEdit}
          title="Edit"
        />
        <Tool
          isVisible={!isEditable}
          color="error"
          onClick={handleRemove}
          title="Remove"
        />
      </Box>
    </Box>
  );
};

export default memo(TodoItem);
