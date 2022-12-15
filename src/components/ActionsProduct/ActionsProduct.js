import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Select, Button } from "antd";
import { addProductAction } from "../../stateManagement/actions/peticionesAction";
const { Option } = Select;

const ActionsProduct = ({ product, idProduct }) => {
  const dispatch = useDispatch();

  const [selectColor, setSelectColor] = useState();
  const [selectStorage, setSelectStorage] = useState();

  const handleChangeColor = (value) => {
    setSelectColor(value);
  };

  const handleChangeStorage = (value) => {
    setSelectStorage(value);
  };

  const onSumit = (e) => {
    e.preventDefault();

    if (product.color.length === 1) {
      setSelectColor(product.color[0].code);
    }
    if (product.storage.length === 1) {
      setSelectStorage(product.storages[0].code);
    }
    const dataProduct = {
      id: idProduct,
      codeColor: selectColor,
      codeStorage: selectStorage,
    };

    dispatch(addProductAction(dataProduct));
  };

  return (
    <Card>
      Colores:
      <Select
        placeholder="Selecciona un color"
        defaultValue={product.color.length >= 2 ? [] : product.color[0].name}
        onChange={handleChangeColor}
      >
        {product.color.map((color, i) => {
          return (
            <Option key={i} value={color.code} label={color.name} name="colors">
              {color.name}
            </Option>
          );
        })}
      </Select>
      Almacenamiento:
      <Select
        placeholder="Seleccione Almacenamiento"
        defaultValue={
          product.storage.length >= 2 ? [] : product.storage[0].name
        }
        onChange={handleChangeStorage}
      >
        {product.storage.map((storage, i) => {
          return (
            <Option
              key={i}
              value={storage.code}
              label={storage.name}
              name="storages"
            >
              {storage.name}
            </Option>
          );
        })}
      </Select>
      <Button onClick={(e) => onSumit(e)}>Añadir</Button>
    </Card>
  );
};

export default ActionsProduct;
