import React from "react";

import UseInputState from "./useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = UseInputState("");

  const addTodo = e => {
    e.preventDefault();

    saveTodo(value);
    reset();
  };

  return (
    <form onSubmit={addTodo}>
      <input placeholder="Add todo" onChange={onChange} value={value} />
    </form>
  );
};

export default TodoForm;
