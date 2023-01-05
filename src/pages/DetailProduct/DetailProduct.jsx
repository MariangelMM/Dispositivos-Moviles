import React, { useEffect } from "react";
import DescriptionProduct from "../../components/DescriptionProduct/DescriptionProduct";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import ActionsProduct from "../../components/ActionsProduct/ActionsProduct";
import "./DetailProduct.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

export default function DetailProduct() {
  const product = useSelector((state) => state.peticiones.detailProduct[0]);
  const navigate = useNavigate();

  const navigateToHome = () => {
    useEffect(() =>{

      navigate('/products', {replace: true});
  })
    
  }

  return (
    <>
      <Breadcrumb className="container-breadcrumb">
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to="/products">Productos</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link to="/detailProduct">
          Detalle Producto
        </Link>
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
      ) : 
      
      navigateToHome()
      }
    </>
  );
}
