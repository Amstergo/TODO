import React from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import UseTodoState from "./components/useTodoState";

const App = () => {
  const { todos, addTodo, deleteTodo } = UseTodoState([]);

  return (
    <div>
      <TodoForm
        saveTodo={todo => {
          const trimedTodo = todo.trim();

          if (trimedTodo) {
            addTodo(trimedTodo);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
