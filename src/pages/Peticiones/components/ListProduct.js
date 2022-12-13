import React, { useState } from "react";
import {
  List,
  Space,
  Skeleton,
  Descriptions,
  Button,
  Modal,
} from "antd";
import {  RightOutlined } from "@ant-design/icons";
import { InfoPeticion } from ".";
import "../peticion-style.css";

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
      <List
        itemLayout="horizontal"
        dataSource={listData}
        style={{ marginLeft: 20, paddingLeft: 50, paddingRight: 50 }}
        bordered={false}
        size="default"
        footer={false}
        renderItem={(item) => (
          <ListItem item={item} handleDetalle={handleDetalle} />
        )}
      >
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
      </List>
    </>
  );
}

const ListItem = ({ item, handleDetalle }) => {
  return (
    <List.Item
      actions={[
        <Space>
          <Button type="text" onClick={() => handleDetalle({ item })}>
            Ver detalle <RightOutlined />
          </Button>
        </Space>,
      ]}
    >
      <Skeleton avatar title={false} loading={item.loading} active>
        <List.Item.Meta
          
          title={item.nombre}
          description={
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Producto">
                {item.numberPrueba}
              </Descriptions.Item>
              <Descriptions.Item label="Nombre del Producto">
                <Space>
                  {item.nomProduct}
                </Space>
              </Descriptions.Item>
            </Descriptions>
          }
        />
      </Skeleton>
    </List.Item>
  );
};
