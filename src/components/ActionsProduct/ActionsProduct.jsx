import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Button } from "antd";
import { addProductAction } from "../../stateManagement/actions/peticionesAction";
import "./ActionsProduct.css";
const { Option } = Select;

const ActionsProduct = ({ product, idProduct }) => {
  const dispatch = useDispatch();

  let productCard = useSelector((state) => state.peticiones.productCard);

  const [selectColor, setSelectColor] = useState();
  const [selectStorage, setSelectStorage] = useState();

  useEffect(() => {
    if (product.color.length < 2) {
      setSelectColor(product.color[0].code);
    }
    if (product.storage.length < 2) {
      setSelectStorage(product.storage[0].code);
    }
  });

  const handleChangeColor = (value) => {
    setSelectColor(value);
  };

  const handleChangeStorage = (value) => {
    setSelectStorage(value);
  };

  const onSumit = () => {
    const dataProduct = {
      id: idProduct,
      codeColor: selectColor,
      codeStorage: selectStorage,
    };

    saveData(dataProduct);
  };

  const saveData = (dataProduct) => {

   
    const viewStorage = localStorage.getItem("totalCart");

    let totalCart = viewStorage ? JSON.parse(viewStorage) : [...productCard];
    totalCart.push(dataProduct);

    localStorage.setItem("totalCart", JSON.stringify(totalCart));
    const dataTime = Math.round(new Date().getTime() / 1000);
    localStorage.setItem("timeTotalCart", JSON.stringify(dataTime));

  dispatch(addProductAction(dataProduct))


  };
  return (
    <>
      <section className="container-actions-product">
        <div className="container-actions-product-selects">
          <div>
            Color:{" "}
            <Select
              className="container-actions-product-select"
              placeholder="Selecciona un color"
              defaultValue={
                product.color.length > 1 ? [] : product.color[0].name
              }
              onChange={handleChangeColor}
            >
              {product.color.map((color, i) => {
                return (
                  <Option
                    key={i}
                    value={color.code}
                    label={color.name}
                    name="colors"
                  >
                    {color.name}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div>
            Almacenamiento:{" "}
            <Select
              className="container-actions-product-select"
              placeholder="Seleccione Almacenamiento"
              defaultValue={
                product.storage.length > 1 ? [] : product.storage[0].name
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
          </div>
        </div>
        <Button type="primary" onClick={() => onSumit()}>
          Añadir
        </Button>
      </section>
    </>
  );
};

export default ActionsProduct;
