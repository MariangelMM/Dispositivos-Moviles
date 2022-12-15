import React from "react";
import { Descriptions } from "antd";
import "./DescriptionProduct.css"


const DescriptionProduct = ({product}) => {



  return (
    <Descriptions layout="horizontal" column={2} className="container-description-product">
      <Descriptions.Item label="Marca">{product.brand}</Descriptions.Item>
      <Descriptions.Item label="Modelo">{product.model}</Descriptions.Item>
      <Descriptions.Item label="Precio">{product.price}</Descriptions.Item>
      <Descriptions.Item label="CPU">{product.cpu}</Descriptions.Item>
      <Descriptions.Item label="RAM">{product.ram}</Descriptions.Item>
      <Descriptions.Item label="Sistema Operativo">{product.so}</Descriptions.Item>
      <Descriptions.Item label="Resolucion de pantalla">
        {product.displayResolution}
      </Descriptions.Item>
      <Descriptions.Item label="Bateria">{product.battery}</Descriptions.Item>
      <Descriptions.Item label="Camaras">
        {product.primaryCamera} {product.secondaryCmera}
      </Descriptions.Item>
      <Descriptions.Item label="Dimensiones">
        {product.dimentions}
      </Descriptions.Item>
      <Descriptions.Item label="Peso">{product.weight}</Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionProduct;
