import React from "react";
import { Layout,  Avatar, Badge } from "antd";
import { QqOutlined } from "@ant-design/icons";
import "./header.css";
import logo from "../image/logo.png";

const { Header } = Layout;

export default function MainHeader() {
  return (
    <Header style={{ padding: 0 }}>
      <div className="user_section">
        <img src={logo} alt="logo" />
        <div>
          <Badge dot={true}>
            <Avatar icon={<QqOutlined />} className="avatar-item" />
          </Badge>
          <span> Usuario</span> 

      
        </div>
      </div>
    </Header>
  );
}
