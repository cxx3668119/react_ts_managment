import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import MainMenu from '@/components/MainMenu';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  //   const navigateTo = useNavigate()
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)"
          }}
        />
        <MainMenu/>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            paddingLeft: "20px",
            background: colorBgContainer,
            marginBottom: "20px"
          }}
        >
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer
          style={{ textAlign: "center", padding: "0", lineHeight: "48px" }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
