import React from "react";
import { Container } from "@mui/material";

import Header from "./components/layout/Header";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Todo />
    </Container>
  );
};

export default App;
