import React from "react";
import {  ListProduct } from "./components";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

export default function Peticionespage() {


  //llamando al estado para obtener la lista de peticiones
  const listData = useSelector((state) => state.peticiones.peticiones);

  return (
    <>
        <Row>
          <Col span={24}>
            <ListProduct
              listData={listData}
            />
          </Col>
        </Row>
        <br />
    </>
  );
}
