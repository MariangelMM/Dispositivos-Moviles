import React, { useState } from "react";
import { Card, Select, Button } from "antd";
const { Option } = Select;
const ActionsProduct = ({ product }) => {
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

    console.log("codigo color", selectColor, "almacenamiento", selectStorage);
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
