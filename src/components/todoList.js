import React from "react";
import { Button, Icon } from "antd";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index.toString()}>
          <span>{todo}</span>
          <Button
            type="primary"
            aria-label="delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <Icon type="delete" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
