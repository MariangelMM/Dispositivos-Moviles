import React from "react";
import { Layout,  Avatar, Badge } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./header.css";
import logo from "./image/logo.png";
const { Header } = Layout;


export default function MainHeader() {

  let productCard = useSelector((state) => state.peticiones.productCard);

  let viewStorage = localStorage.getItem("totalCart")
  let statusLocalStorage = JSON.parse(viewStorage) || []



  return (
    <Header style={{ padding: 0 }}>
      <div className="user_section">
        <img src={logo} alt="logo" />
        <div>
          <Badge count={statusLocalStorage? statusLocalStorage.length:0}>
            <Avatar icon={<ShoppingCartOutlined />} className="avatar-item" />
          </Badge>
          <span> Usuario</span> 

      
        </div>
      </div>
    </Header>
  );
}
