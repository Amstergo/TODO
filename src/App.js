import React from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import ContentLayout from "./components/contentLayout";
import Sidebar from "./components/sidebar";
import UseTodoState from "./components/useTodoState";
import { Layout } from "antd";
import styled from "styled-components";

import "antd/dist/antd.css";
import GlobalStyles from "./utils/global";

const { Content } = Layout;

const App = () => {
  const { todos, addTodo, deleteTodo, deleteAllTodos } = UseTodoState([]);

  return (
    <StyleLayout>
      <Sidebar deleteAllTodos={deleteAllTodos} />
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
          <ContentLayout>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </ContentLayout>
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
