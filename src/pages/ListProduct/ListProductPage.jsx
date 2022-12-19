import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./listProductPage.css";
import CardItem from "../../components/ItemProduct/Item";
import SearchProduct from "../../components/SearchProduct/SearchProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import { listProductAction } from "../../stateManagement/actions/peticionesAction";
import { Breadcrumb } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export default function ListProductPage() {
  const listData = useSelector((state) => state.peticiones.products);
  const listDataSearch = useSelector(
    (state) => state.peticiones.listProductSearch
  );

  const dispatch = useDispatch();

  const getProductsList = () => {
    dispatch(listProductAction());
  };

  useEffect(() => {
    getProductsList();
  });

  return (
    <section>
      <Breadcrumb className="container-breadcrumb">
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/products">Productos</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="container-headerListProduct">
        <h1 className="title-listProduct">Listado de productos</h1>
        <SearchProduct />
      </div>

      {listDataSearch.length < 1 ? (
        <div className="container-listProduct">
          {listData.map((item) => {
            return (
              <Card
                hoverable
                key={item.id}
                bordered={false}
                style={{ width: 300 }}
              >
                <ImageProduct product={item.imgUrl} />
                <hr />
                <CardItem item={item} />
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="container-listProduct">
          {listDataSearch.map((item) => {
            return (
              <Card
                hoverable
                key={item.id}
                bordered={false}
                style={{ width: 300 }}
                className="container-listProduct-card"
              >
                <ImageProduct product={item.imgUrl} />
                <hr />
                <CardItem item={item} />
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}
