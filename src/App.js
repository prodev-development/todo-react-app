import React from "react";

import Header from "./components/layout/Header";
import TodoList from "./pages/todo";

const App = () => {
  return (
    <div className="container">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
