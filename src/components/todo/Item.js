import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "../../actions/todo";

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
    <div
      className="d-flex align-items-center justify-content-between w-100"
      style={{ height: 70 }}
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
            <div>
              <span className="text-decoration-line-through">{item.text}</span>
              <br />
              <span className="badge bg-light text-dark">
                {convertString(currentItem)}
              </span>
            </div>
          ) : (
            <span>{item.text}</span>
          )
        }
      />
      {isEditable ? (
        <div>
          <Button
            className="ms-3"
            variant="contained"
            color="primary"
            onClick={onSave}
          >
            Save
          </Button>
          <Button
            className="ms-3"
            variant="contained"
            color="error"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div className="d-flex">
          <Button
            className="ms-3"
            variant="contained"
            color="primary"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            className="ms-3"
            variant="contained"
            color="error"
            onClick={onRemove}
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
