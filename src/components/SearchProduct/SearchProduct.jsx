import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListProductAction } from "../../stateManagement/actions/peticionesAction";
import { Input, Button } from "antd";
import "./SearchProduct.css";

const SearchProduct = ({setTextSearch}) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.peticiones.products);
  const [filterSearch, setFilterSearch] = useState("");
  
  const onSearch = (e) => {
    let searchInput = e.target.value

    if (searchInput !== "") {
      const data = productList.filter(
        (ele) =>
          ele.brand.toUpperCase().includes(searchInput.toUpperCase()) ||
          ele.model.toUpperCase().includes(searchInput.toUpperCase())
      );
      if(data.length > 0){
        setTextSearch(true)
        setFilterSearch(data);
      }
      else{
        setFilterSearch(data);
        setTextSearch(false)
      }
     
    } else {
      setFilterSearch(productList);
      setTextSearch(true)
    }
  };


  useEffect(()=>{
    if (filterSearch) {
      dispatch(setListProductAction(filterSearch));
    }
  }, [filterSearch, dispatch])

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
