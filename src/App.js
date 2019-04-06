import React from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import UseTodoState from "./components/useTodoState";
import useCollapseState from "./components/useCollapseState";
import { Layout, Typography, Menu, Icon } from "antd";
import styled from "styled-components";

import "antd/dist/antd.css";
import GlobalStyles from "./utils/global";

const { Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const { todos, addTodo, deleteTodo, deleteAllTodos } = UseTodoState([]);
  const { collapsed, onCollapse } = useCollapseState(false);

  return (
    <StyleLayout>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        {collapsed ? (
          <StyleTitle style={{ display: "none" }}>Todo</StyleTitle>
        ) : (
          <StyleTitle>Todo</StyleTitle>
        )}
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="edit" />
            <span>add todo</span>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              deleteAllTodos();
            }}
          >
            <Icon type="file" />
            <span>clear all</span>
          </Menu.Item>
        </Menu>
      </Sider>
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

const StyleTitle = styled(Title)`
  text-align: center;
  padding: 30px 15px;
`;

export default App;
