import React from "react";
import DescriptionProduct from "../../components/DescriptionProduct/DescriptionProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import ActionsProduct from "../../components/ActionsProduct/ActionsProduct";
import "./DetailProduct.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DetailProduct() {
  const product = useSelector((state) => state.peticiones.detailProduct[0]);

  return (
    <>
      {product ? (
        <section className="container-detailProduct">
          <Link to="/products" className="link-return-products">Volver a productos</Link>
          <div className="container-detailProduct-description">
            <ImageProduct product={product.imgUrl} />
            <div>
            <p className="title-detailProduct">Detalle Producto</p>
            <DescriptionProduct product={product} />
            <ActionsProduct product={product.options} idProduct={product.id} />
            </div>
          </div>
        </section>
      ) : (
        <p>Cargando Producto</p>
      )}
    </>
  );
}
