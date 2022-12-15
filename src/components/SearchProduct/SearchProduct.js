import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListProductAction } from "../../stateManagement/actions/peticionesAction";
import { Input, Button } from "antd";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.peticiones.productSearch);
  const [filterSearch, setFilterSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const onSearch = (e) => {
	// e.preventDefault();
  
    if (searchInput !== "") {
      const data = productList.filter(
        (ele) =>
          ele.brand.toUpperCase().includes(searchInput.toUpperCase()) ||
          ele.model.toUpperCase().includes(searchInput.toUpperCase())
      );
      setFilterSearch(data);
    } else {
      setFilterSearch(productList);
    }

    if (filterSearch) {
      dispatch(setListProductAction(filterSearch));
    }
  };

  return (
    <>
      <Input
	  maxLength={16}
	  style={{ width: '300px' }}
        placeholder="Buscar su producto"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button onClick={(e) => onSearch(e)}>Buscar </Button>
    </>
  );
};

export default SearchProduct;
