import React from "react";
import { Descriptions} from "antd";


const DescriptionProduct = () => {  

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

export default DescriptionProduct 