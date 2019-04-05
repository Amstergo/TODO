import React from "react";

import TodoForm from "./components/todoForm";

const App = () => {
  return (
    <div>
      <TodoForm saveTodo={console.warn} />
    </div>
  );
};

export default App;
