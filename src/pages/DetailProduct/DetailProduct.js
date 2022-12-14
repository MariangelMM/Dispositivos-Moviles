import React from "react";
import DescriptionProduct from "../../components/DescriptionProduct/DescriptionProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import "./DetailProduct.css";



export default function DetailProduct() {

const item =  {
  "id": "1",
  "imgUrl": "https://images.vexels.com/media/users/3/208382/isolated/preview/f25868c7977e679c46ccf94970b97ed9-celular-antigo-plana-by-vexels.png",
  "brand": "Acer",
  "model": "Liquid 1",
  "price": "16",
  "cpu": "",
  "ram": "",
  "so": "",
  "displayResolution": "",
  "battery": "",
  "dimentions": "",
  "weight": "",
  "primaryCamera": "",
  "secondaryCmera": "",
  "options": {
    "color": [
      {
        "code": "1",
        "name": "black"
      }
    ],
    "storage": [
      {
        "code": "1",
        "name": "16GB"
      }
    ]
  }
}


  return (
    <>
      <a href="/products">Volver a productos</a>
      <p>Detalle Producto</p>
      <div className="container-detailProduct">
        <ImageProduct item={item.imgUrl}/>
        <DescriptionProduct item={item}/>
      </div>
    </>
  );
}
