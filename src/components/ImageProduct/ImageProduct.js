import React from "react";
import "./ImageProduct.css"

const ImageProduct = ({product}) => {  

  return (
    <div className="container-imgProduct">
    <img className="imgProduct" src={product} alt=""/>
    </div>
  );
}

export default ImageProduct 