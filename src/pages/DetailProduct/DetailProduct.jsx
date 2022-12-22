import React from "react";
import DescriptionProduct from "../../components/DescriptionProduct/DescriptionProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import ActionsProduct from "../../components/ActionsProduct/ActionsProduct";
import "./DetailProduct.css";
import { useSelector } from "react-redux";

import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function DetailProduct() {
  const product = useSelector((state) => state.peticiones.detailProduct[0]);

  return (
    <>
      <Breadcrumb className="container-breadcrumb">
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Productos</Breadcrumb.Item>
        <Breadcrumb.Item href="/detailProduct">
          Detalle Producto
        </Breadcrumb.Item>
      </Breadcrumb>

      {product ? (
        <section className="container-detailProduct">
          <div className="container-detailProduct-description">
            <ImageProduct product={product.imgUrl} />
            <div>
              <p className="title-detailProduct">Detalle Producto</p>
              <DescriptionProduct product={product} />
              <ActionsProduct
                product={product.options}
                idProduct={product.id}
              />
            </div>
          </div>
        </section>
      ) : (
        <p className="text-loading">Cargando Producto...</p>
      )}
    </>
  );
}
