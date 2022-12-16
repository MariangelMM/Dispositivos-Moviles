import React from "react";
import { useDispatch } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Item.css";
import { detailProductAction } from "../../stateManagement/actions/peticionesAction";
import { Card } from "antd";

const { Meta } = Card;

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const getDetailProduct = (product) => {
    dispatch(detailProductAction(product));
  };

  return (
    <>
     <Link to="/detailProduct" onClick={() => getDetailProduct(item)}>
      <Meta title={item.brand} description={item.model} />
      <p className="link-item">
        <span>Precio: ${item.price}</span>

        <Link to="/detailProduct" onClick={() => getDetailProduct(item)}>
          Ver detalle <RightOutlined/>
        </Link>
      </p>
      </Link>
    </>
  );
};

export default CardItem;
