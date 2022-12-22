import React from "react";
import { useDispatch } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Item.css";
import { detailProductAction, detailProductSuccess } from "../../stateManagement/actions/peticionesAction";
import { Card } from "antd";

const { Meta } = Card;

const CardItem = ({ item }) => {

  let viewStorage = localStorage.getItem("totalListaProductos");
  let statusLocalStorage = JSON.parse(viewStorage);

  const dispatch = useDispatch();

  const getDetailProduct = (product) => {


    const data = statusLocalStorage?.pokemon.filter(
      (ele) =>
        ele.id === product.id
    );

    
    if(data){
    dispatch(detailProductSuccess(data));
    }else {
    dispatch(detailProductAction(product));
    }
  };

  return (
    <>
      <Meta title={item.brand} description={item.model} />
      <p className="link-item">
        <span>Precio: ${item.price}</span>

        <Link to="/detailProduct" onClick={() => getDetailProduct(item)}>
          Ver detalle <RightOutlined/>
        </Link>
      </p>
    </>
  );
};

export default CardItem;
