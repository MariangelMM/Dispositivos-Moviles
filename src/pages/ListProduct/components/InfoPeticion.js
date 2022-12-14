import React from "react";
import { Card, Typography, Descriptions} from "antd";
import { ExceptionOutlined } from "@ant-design/icons";

const InfoPeticion = (props) => {
  const dataPeticion = props.peticion;
  const { Title } = Typography;
  return (
    <>
      <Card style={{ maxWidth: 550, float: "right", marginTop: 40 }}>
        <div style={{ textAlign: "center", width: "100%", marginBottom: 40 }}>
          <Title level={4}>
            <ExceptionOutlined /> Detalle del Producto
          </Title>
        </div>
        <div>
          <Descriptions layout="horizontal" column={1}>
            <Descriptions.Item label="Nombre producto">
              {dataPeticion.nomPeticion}
            </Descriptions.Item>
            <Descriptions.Item label="id Petición">
              {dataPeticion.key}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Card>
    </>
  );
};

export default InfoPeticion;
