import React from "react";
import { Box, Button } from "@mui/material";

const TodoActionBtn = ({ isVisible, title, color, onClick }) => {
  return isVisible ? (
    <Box>
      <Button
        variant="contained"
        color={color}
        onClick={onClick}
        sx={{ ml: 1 }}
      >
        {title}
      </Button>
    </Box>
  ) : (
    <></>
  );
};

export default TodoActionBtn;
