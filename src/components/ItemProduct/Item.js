import React from "react";
import { List, Space, Descriptions, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";


const CardItem = ({ item }) => {
    return (
      <>
        <List.Item.Meta
          title={item.nombre}
          description={
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Producto">
                {item.numberPrueba}
              </Descriptions.Item>
              <br/>
              <Descriptions.Item label="Nombre del Producto">
                <Space>{item.nomProduct}</Space>
              </Descriptions.Item>
            </Descriptions>
          }
        />
  
        <a href="/detailProduct">
          Ver detalle <RightOutlined />
        </a>
      </>
    );
  };

  export default CardItem