import React from "react";
import "./ImageProduct.css"

const ImageProduct = ({item}) => {  

  return (
    <div className="container-imgProduct">
    <img className="imgProduct" src={item} alt=""/>
    </div>
  );
}

export default ImageProduct 