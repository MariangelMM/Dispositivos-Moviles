import React from "react";
import { ListProduct } from "./components";
import { useSelector } from "react-redux";
import "./listProductPage.css"
import { Input } from 'antd';

const { Search } = Input;


export default function ListProductPage() {
  //llamando al estado para obtener la lista de peticiones
  const listData = useSelector((state) => state.peticiones.peticiones);
  const onSearch = (value) => console.log(value);


  return (
    <section>
      <div className="container-headerListProduct">
      <h1 className="title-listProduct">Listado de productos</h1>
      <Search placeholder="Buscar producto" onSearch={onSearch} style={{ width: 200 }} />
      </div>

      <div className="container-listProduct">
      <ListProduct listData={listData} />
      </div>
    </section>
  );
}
