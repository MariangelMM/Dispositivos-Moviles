import React from "react";
import { Layout, Button, Avatar, Badge } from "antd";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";
import "./header.css";

const { Header } = Layout;

export default function MainHeader() {
  return (
    <Header style={{ padding: 0 }}>
      <div></div>
      <div className="user_section">
        <Badge dot={true}>
          <Avatar icon={<UserOutlined />} className="avatar-item" />
        </Badge>
        <span> Mariangel</span>
        <div>
          <Button type="link" className="btn-close">
            <ExportOutlined />
            &nbsp;Cerrar Sesión
          </Button>
        </div>
      </div>
    </Header>
  );
}
