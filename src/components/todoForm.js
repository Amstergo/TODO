import React, { useState } from "react";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  console.log(useState());
  console.log("value - " + value);

  const getEnter = e => {
    setValue(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();

    saveTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={addTodo}>
      <input placeholder="Add todo" onChange={getEnter} value={value} />
    </form>
  );
};

export default TodoForm;
