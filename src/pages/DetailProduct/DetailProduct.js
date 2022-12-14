import React from "react";
import { Descriptions} from "antd";

export default function DetailProduct() {  

  return (
    <Descriptions layout="horizontal" column={1}>
    <Descriptions.Item label="Nombre producto">
      dataPeticion.nomPeticion
    </Descriptions.Item>
    <Descriptions.Item label="id Petición">
      dataPeticion.key
    </Descriptions.Item>
  </Descriptions>
  );
}
