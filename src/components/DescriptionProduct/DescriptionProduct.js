import React from "react";
import { Descriptions } from "antd";

const DescriptionProduct = ({ item }) => {
  return (
    <Descriptions layout="horizontal" column={1}>
      <Descriptions.Item label="Marca">{item.brand}</Descriptions.Item>
      <Descriptions.Item label="Modelo">{item.model}</Descriptions.Item>
      <Descriptions.Item label="Precio">{item.price}</Descriptions.Item>
      <Descriptions.Item label="CPU">{item.cpu}</Descriptions.Item>
      <Descriptions.Item label="RAM">{item.ram}</Descriptions.Item>
      <Descriptions.Item label="Sistema Operativo">{item.so}</Descriptions.Item>
      <Descriptions.Item label="Resolucion de pantalla">
        {item.displayResolution}
      </Descriptions.Item>
      <Descriptions.Item label="Bateria">{item.battery}</Descriptions.Item>
      <Descriptions.Item label="Camaras">
        {item.primaryCamera} {item.secondaryCmera}
      </Descriptions.Item>
      <Descriptions.Item label="Dimensiones">
        {item.dimentions}
      </Descriptions.Item>
      <Descriptions.Item label="Peso">{item.weight}</Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionProduct;
