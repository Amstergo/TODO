import React, { useState } from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm
        saveTodo={todo => {
          const trimedTodo = todo.trim();

          if (trimedTodo) {
            setTodos([...todos, trimedTodo]);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={todoIndex => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);

          setTodos(newTodos);
        }}
      />
    </div>
  );
};

export default App;
