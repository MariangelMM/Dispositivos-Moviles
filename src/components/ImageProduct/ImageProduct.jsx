import React from "react";
import "./ImageProduct.css"

const ImageProduct = ({product}) => {  

  return (
    <div className="container-imgProduct">
    <img className="imgProduct" 
    src={product ? product : "https://images.vexels.com/media/users/3/208382/isolated/preview/f25868c7977e679c46ccf94970b97ed9-celular-antigo-plana-by-vexels.png" } alt=""/>
    </div>
  );
}

export default ImageProduct 