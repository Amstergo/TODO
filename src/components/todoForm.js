import React from "react";
import { Input } from "antd";

import UseInputState from "../hooks/useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = UseInputState("");

  const addTodo = e => {
    e.preventDefault();

    saveTodo(value);
    reset();
  };

  return (
    <form onSubmit={addTodo}>
      <Input
        placeholder="Add todo"
        allowClear
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
