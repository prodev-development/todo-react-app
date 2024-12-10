import React, { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/material";

const AddItem = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleAdd = useCallback(() => {
    if (value.trim() === "") {
      return;
    }
    onAdd({ text: value });
    setValue("");
  }, [onAdd, value]);

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
        onClick={handleAdd}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddItem;
