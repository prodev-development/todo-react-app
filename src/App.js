import React from "react";

import Header from "./pages/Header";
import TodoList from "./pages/Todo/List";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
