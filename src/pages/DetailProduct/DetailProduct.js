import React from "react";
import DescriptionProduct from "../../components/DescriptionProduct/DescriptionProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import "./DetailProduct.css";

export default function DetailProduct() {
  return (
    <>
      <a href="/products">Volver a productos</a>
      <p>Detalle Producto</p>
      <div className="container-detailProduct">
        <ImageProduct />
        <DescriptionProduct />
      </div>
    </>
  );
}
