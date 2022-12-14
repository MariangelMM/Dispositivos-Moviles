import React from "react";
import { List, Space, Descriptions } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./Item.css";

const CardItem = ({ item }) => {
  return (
    <>
      <List.Item.Meta
        title={item.nombre}
        description={
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="Marca">{item.brand}</Descriptions.Item>
            <br />
            <Descriptions.Item label="Modelo">
              <Space>{item.model}</Space>
            </Descriptions.Item>
            <br />
            <Descriptions.Item label="Precio">
              <Space>{item.price}</Space>
            </Descriptions.Item>
          </Descriptions>
        }
      />
      <p className="link-item">
        <a href="/detailProduct">
          Ver detalle <RightOutlined />
        </a>
      </p>
    </>
  );
};

export default CardItem;
