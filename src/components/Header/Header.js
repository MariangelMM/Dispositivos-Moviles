import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout,  Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./header.css";
import logo from "./image/logo.png";

const { Header } = Layout;

export default function MainHeader() {

  
  let productCard = useSelector((state) => state.peticiones.productCard);


  localStorage.setItem("totalCart", productCard)
  productCard = localStorage.getItem("totalCart")
  

  return (
    <Header style={{ padding: 0 }}>
      <div className="user_section">
        <img src={logo} alt="logo" />
        <div>
          <Badge count={productCard.length}>
            <Avatar icon={<ShoppingCartOutlined />} className="avatar-item" />
          </Badge>
          <span> Usuario</span> 

      
        </div>
      </div>
    </Header>
  );
}
