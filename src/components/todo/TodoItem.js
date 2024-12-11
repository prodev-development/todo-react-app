import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { memo, useCallback, useEffect, useState } from 'react';

import Tool from './TodoActionBtn';

const TodoItem = ({ item, onEdit, onRemove }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setCurrentItem({ ...item });
  }, [item]);

  const convertString = useCallback(
    (date) => `${date.toLocaleString()} completed.`,
    [],
  );

  const handleComplete = useCallback(
    (value) => {
      const completedItem = {
        ...currentItem,
        description: convertString(new Date()),
        completed: value,
      };
      onEdit(completedItem);
    },
    [onEdit, currentItem, convertString],
  );

  const handleEdit = useCallback(() => {
    setIsEditable(true);
  }, []);

  const handleRemove = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm('Are you sure you want to delete this item?');
    if (!res) {
      return;
    }
    onRemove(currentItem);
  }, [onRemove, currentItem]);

  const handleSave = useCallback(() => {
    if (currentItem.title.trim() === '') {
      return;
    }
    onEdit(currentItem);
    setIsEditable(false);
  }, [onEdit, currentItem]);

  const handleCancel = useCallback(() => {
    setIsEditable(false);
    setCurrentItem({ ...item });
  }, [item]);

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
            checked={currentItem.completed || false}
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
              value={currentItem.title || ''}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, title: e.target.value })
              }
            />
          ) : currentItem.completed ? (
            <>
              <Box component="del">{item.title}</Box>
              <Box typography="caption">{currentItem.description}</Box>
            </>
          ) : (
            <Box>{item.title}</Box>
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
