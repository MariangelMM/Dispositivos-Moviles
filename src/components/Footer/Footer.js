import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function MainFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
        padding: "130px 10px 10px",
      }}
    >
      Footer, Copyright 2022
    </Footer>
  );
}
