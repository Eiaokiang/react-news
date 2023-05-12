import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./index.css";
import axios from 'axios'


import { useHistory } from "react-router-dom";

const { Sider } = Layout;

// const items = [
//   {
//     key: "/home",
//     icon: <MailOutlined />,
//     label: "首页",
//   },
//   {
//     key: "/user-manage",
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: "/user-manage/list",
//         icon: <MailOutlined />,
//         label: "用户列表",
//       },
//     ],
//     label: "用户管理",
//   },
//   {
//     key: "/right-manage",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         key: "/right-manage/role/list",
//         icon: <MailOutlined />,
//         label: "角色列表",
//       },
//       {
//         key: "/right-manage/right/list",
//         icon: <MailOutlined />,
//         label: "权限列表",
//       },
//     ],
//     label: "权限管理",
//   },
// ];




export default function SideMenu() {
  const history = useHistory();
  const clickMenu =(e)=>{
    history.push(e.key)
  }
  const [items,setItems] = useState([])  
  useEffect(()=>{
    axios.get("http://localhost:5000/rights?_embed=children").then(res =>{
      console.log(res.data);
      setItems(res.data);
    })
  },[])
 

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/home"]}
        items={items}
        onClick = {clickMenu}
      />
    </Sider>
  );
}
