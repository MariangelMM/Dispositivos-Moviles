import React from "react";
import DescriptionProduct from "../../components/DescriptionProduct/DescriptionProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import ActionsProduct from "../../components/ActionsProduct/ActionsProduct";
import "./DetailProduct.css";
import { useSelector } from "react-redux";

export default function DetailProduct() {
  //llamando al estado para obtener la lista de peticiones
  const product = useSelector((state) => state.peticiones.detailProduct[0]);



  return (
    <>
      {product ? (
        <>
          <a href="/products">Volver a productos</a>
          <p>Detalle Producto</p>
          <div className="container-detailProduct">
            <ImageProduct product={product.imgUrl}/>
            <DescriptionProduct product={product}/>
            <ActionsProduct product={product.options} />
          </div>
        </>
      ) : (
        <p>Cargando Producto</p>
      )}
    </>
  );
}
