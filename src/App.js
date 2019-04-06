import React from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import UseTodoState from "./components/useTodoState";
import useCollapseState from "./components/useCollapseState";
import { Layout } from "antd";
import styled from "styled-components";

import "antd/dist/antd.css";
import GlobalStyles from "./utils/global";

const { Sider, Content } = Layout;

const App = () => {
  const { todos, addTodo, deleteTodo } = UseTodoState([]);
  const { collapsed, onCollapse } = useCollapseState(false);

  return (
    <StyleLayout>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} />
      <Layout>
        <Content>
          <TodoForm
            saveTodo={todo => {
              const trimedTodo = todo.trim();

              if (trimedTodo) {
                addTodo(trimedTodo);
              }
            }}
          />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Content>
        <GlobalStyles />
      </Layout>
    </StyleLayout>
  );
};

const StyleLayout = styled(Layout)`
  min-height: 100vh !important;
`;

export default App;
