import React, { useEffect } from "react";
import { Layout,  Avatar, Badge } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./header.css";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";
const { Header } = Layout;

export default function MainHeader() {

   let productCard = useSelector((state) => state.peticiones.productCard);

 

  let viewStorage = localStorage.getItem("totalCart")
  let statusLocalStorage = JSON.parse(viewStorage) || []

  let timeStorage = localStorage.getItem("timeTotalCart")

  useEffect(() =>{
     productCard

    if (Math.round(new Date().getTime() / 1000) - timeStorage > 3600) {
      window.localStorage.removeItem('totalCart')
      window.localStorage.removeItem('timeTotalCart')
      statusLocalStorage = []
    }

   }, [timeStorage])



  return (
    <Header style={{ padding: 0 }}>
      <div className="user_section">
      <Link to="/products">
        <img src={logo} alt="logo" />
        </Link>
        <div>
          <Badge count={statusLocalStorage? statusLocalStorage.length : 0}>
            <Avatar icon={<ShoppingCartOutlined />} className="avatar-item" />
          </Badge>
          <span> Usuario</span> 

      
        </div>
      </div>
    </Header>
  );
}
