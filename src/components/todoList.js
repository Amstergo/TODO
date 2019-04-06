import React from "react";
import { Button, Icon } from "antd";
import styled from "styled-components";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index.toString()}>
          <span>{todo}</span>
          <StyleButton
            aria-label="delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <Icon type="delete" />
          </StyleButton>
        </div>
      ))}
    </div>
  );
};

const StyleButton = styled(Button)`
  border: none !important;
  background-color: inherit !important;
`;

export default TodoList;
