import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListProductAction } from "../../stateManagement/actions/peticionesAction";
import { Input, Button } from "antd";
import "./SearchProduct.css";
import { listProductAction } from "../../stateManagement/actions/peticionesAction";


const SearchProduct = ({ setTextSearch }) => {
  const dispatch = useDispatch();

  let viewStorage = localStorage.getItem("totalListaProductos");
  let statusLocalStorage = JSON.parse(viewStorage);


  const listData = useSelector((state) => state.peticiones.products);

  useEffect(() => {

  if (!statusLocalStorage) {
    dispatch(listProductAction());
  }
  if (statusLocalStorage === null && listData.length > 0) {

    const item = {
      expiry: Math.round(new Date().getTime() / 1000),
      products: listData,
    };

    localStorage.setItem("totalListaProductos", JSON.stringify(item));


    dispatch(setListProductAction(item.products));
  }

}, [dispatch, statusLocalStorage, listData])

  const [filterSearch, setFilterSearch] = useState();

  const onSearch = (e) => {

    let searchInput = e.target.value;

    if (searchInput !== "") {
      const data = statusLocalStorage?.products.filter(
        (ele) =>
          ele.brand.toUpperCase().includes(searchInput.toUpperCase()) ||
          ele.model.toUpperCase().includes(searchInput.toUpperCase())
      );

      if (data.length > 0) {
        setTextSearch(true);
        setFilterSearch(data);
      } else {
        setFilterSearch(data);
        setTextSearch(false);
      }
    } else {
      setFilterSearch(statusLocalStorage?.products);
      setTextSearch(true);
    }
  };

  useEffect(() => {
    if (statusLocalStorage && !filterSearch) {
      
      setFilterSearch(statusLocalStorage?.products);
    }

    if (filterSearch) {
      dispatch(setListProductAction(filterSearch));
    }
  }, [filterSearch, dispatch]);
 
  useEffect(() =>{
   if (Math.round(new Date().getTime() / 1000) - statusLocalStorage?.expiry > 3600) {
     window.localStorage.removeItem('totalListaProductos')
   }
  }, [])



  return (
    <div className="container-search-producto">
      <Input
        maxLength={16}
        className="input-search"
        placeholder="Buscar su producto"
        onChange={(e) => onSearch(e)}
      />
      <Button onClick={() => onSearch()}>Buscar </Button>
    </div>
  );
};

export default SearchProduct;
