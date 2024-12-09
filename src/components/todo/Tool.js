import React from "react";
import { Box, Button } from "@mui/material";

const Tool = ({ isVisible, text, color, onClick }) => {
  return isVisible ? (
    <Box>
      <Button
        variant="contained"
        color={color}
        onClick={onClick}
        sx={{ ml: 1 }}
      >
        {text}
      </Button>
    </Box>
  ) : (
    <></>
  );
};

export default Tool;
