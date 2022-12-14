import React, { useState } from "react";
import { List, Space, Descriptions, Button, Modal, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { InfoPeticion } from ".";

export default function ListProduct(props) {
  const { listData } = props;
  const [detallePeticion, setDetallePeticion] = useState("");
  const [showDetalle, setShowDetalle] = useState(false);

  // abrir drawer de informacion
  const handleDetalle = (value) => {
    // guardar datos del detalle que se va a mostrar
    setDetallePeticion(value.item);
    setShowDetalle(true);
  };

  // cerrar drawer de informacion
  const onCloseDetalle = () => {
    setShowDetalle(false);
  };

  return (
    <>
      {listData.map((item) => {
        return (
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <CardItem item={item} handleDetalle={handleDetalle} />

            <Modal
              visible={showDetalle}
              open={showDetalle}
              onOk={onCloseDetalle}
              onCancel={onCloseDetalle}
            >
              <InfoPeticion
                peticion={detallePeticion}
                onCloseDetalle={onCloseDetalle}
              />
            </Modal>
          </Card>
        );
      })}
    </>
  );
}

const CardItem = ({ item, handleDetalle }) => {
  return (
    <>
      <List.Item.Meta
        title={item.nombre}
        description={
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="Producto">
              {item.numberPrueba}
            </Descriptions.Item>
            <br/>
            <Descriptions.Item label="Nombre del Producto">
              <Space>{item.nomProduct}</Space>
            </Descriptions.Item>
          </Descriptions>
        }
      />

      <Button type="text" onClick={() => handleDetalle({ item })}>
        Ver detalle <RightOutlined />
      </Button>
    </>
  );
};
