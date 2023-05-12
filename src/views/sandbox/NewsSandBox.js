import React from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import SideMenu from "../../components/sandBox/SideMenu";
import TopHeader from "../../components/sandBox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";
import NoPermission from "./noPermission/NoPermission";
import { Layout } from 'antd';
import './NewsSandBox.css'
const {  Content } = Layout;


export default function NewsSandBox() {
  return (
      <Layout>
        <SideMenu />
        <Layout className="site-layout">
          <TopHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/user-manage/list" component={UserList} />
              <Route path="/right-manage/role/list" component={RoleList} />
              <Route path="/right-manage/right/list" component={RightList} />

              {/* exact精确匹配/ */}
              <Redirect from="/" to="/home" exact />

              <Route path="*" component={NoPermission} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
  );
}
