import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./listProductPage.css"

import CardItem from "../../components/ItemProduct/Item";
import ImageProduct from "../../components/ImageProduct/ImageProduct";
import { listProductAction } from "../../stateManagement/actions/peticionesAction";


import { Input, Card } from "antd";
const { Search } = Input;


export default function ListProductPage() {
  //llamando al estado para obtener la lista de peticiones
  const listData = useSelector((state) => state.peticiones.products);

  const onSearch = (value) => console.log(value);

  const dispatch = useDispatch();

  const getProductsList = (idPeticion) => {
    dispatch(listProductAction(idPeticion));
  }

  useEffect(() => {
    getProductsList();
  });

  return (
    <section>
      <div className="container-headerListProduct">
      <h1 className="title-listProduct">Listado de productos</h1>
      <Search placeholder="Buscar producto" onSearch={onSearch} style={{ width: 200 }} />
      </div>

      <div className="container-listProduct">
      {listData.map((item) => {
        return (
          <Card key={item.id}  bordered={false} style={{ width: 300 }}>
            <ImageProduct product={item.imgUrl} />
            <hr/>
            <CardItem item={item} />
          </Card>
        );
      })}
      </div>
    </section>
  );
}



