import React from "react";
import { Layout, Menu, Icon, Typography } from "antd";
import styled from "styled-components";

import UseCollapseState from "../hooks/useCollapseState";

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = ({ deleteAllTodos }) => {
  const { collapsed, SwitchCollapse } = UseCollapseState(false);

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={SwitchCollapse}
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
  );
};

const StyleTitle = styled(Title)`
  text-align: center;
  padding: 30px 15px;
`;

export default Sidebar;
