import React from "react";
import "./DescriptionProduct.css";
import { Col, Row } from "antd";

const DescriptionProduct = ({ product }) => {
  return (
    <div className="container-description-product">
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div>Marca: {product.brand}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>Modelo: {product.model}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>Precio: {product.price}</div>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div>CPU: {product.cpu}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>RAM: {product.ram}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>Sistema Operativo: {product.so}</div>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div>Resolución de Pantalla: {product.displayResolution}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>Bateria: {product.battery}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            Camaras:
            {product.primaryCamera} {product.secondaryCmera}
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <div>Dimensiones: {product.dimentions}</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>Peso: {product.weight}</div>
        </Col>
      </Row>
    </div>
  );
};

export default DescriptionProduct;
