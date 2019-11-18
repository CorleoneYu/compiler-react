import React, { Component } from "react";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { config } from "../../constant";
/* component */
import PlusTimes from "../plus-times";
import Game from "../game";

/* antd */
import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <h1 className="cwhite">少儿编程平台</h1>
          </Header>
          <Layout style={{ height: "calc(100vh - 64px)", overflow: "hidden" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["game-link-0"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {/* <Menu.Item key="1">
                  <NavLink to="/plus-times">
                    <Icon type="user" />
                    加乘编译器
                  </NavLink>
                </Menu.Item> */}
                {config.map(item => {
                  return (
                    <Menu.Item key={`game-link-${item.level}`}>
                      <NavLink to={`/mini-compiler/${item.level}`}>
                        {item.name}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Sider>
            <Layout style={{ padding: "24px" }}>
              <Content
                style={{
                  background: "#fff",
                  margin: 0,
                  height: "80vh",
                  padding: "20px"
                }}
              >
                <Switch>
                  <Route path="/plus-times" component={PlusTimes} />
                  <Route path="/mini-compiler/:level" component={Game} />
                  <Redirect from="*" to="/mini-compiler/0" />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
