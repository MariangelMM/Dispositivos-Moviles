import React from "react";
import { useDispatch } from "react-redux";
import { List, Space, Descriptions } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link} from 'react-router-dom';
import "./Item.css";
import { detailProductAction } from "../../stateManagement/actions/peticionesAction";


const CardItem = ({ item }) => {

  const dispatch = useDispatch();

  const getDetailProduct = (product) => {
    dispatch(detailProductAction(product));
  }


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
        <Link to="/detailProduct" onClick={() =>  getDetailProduct(item)} >
          Ver detalle <RightOutlined />
        </Link>
      </p>
    </>
  );
};

export default CardItem;
