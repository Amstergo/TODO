import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  console.log(todos);

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index.toString()}>
          <span>{todo}</span>
          <button
            aria-label="delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
