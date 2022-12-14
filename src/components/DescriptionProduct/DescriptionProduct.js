import React from "react";
import { Descriptions } from "antd";
import {  useSelector } from "react-redux";




const DescriptionProduct = () => {

//llamando al estado para obtener la lista de peticiones
const product = useSelector((state) => state.peticiones.detailProduct[0]);

console.log("rrr", product)

  return (
    <Descriptions layout="horizontal" column={1}>
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
