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
        <>
          <Link to="/products">Volver a productos</Link>

          <p>Detalle Producto</p>
          <div className="container-detailProduct">
            <ImageProduct product={product.imgUrl} />
            <DescriptionProduct product={product} />
            <ActionsProduct product={product.options} idProduct={product.id} />
          </div>
        </>
      ) : (
        <p>Cargando Producto</p>
      )}
    </>
  );
}
