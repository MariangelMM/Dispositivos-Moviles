import React from "react";

import "./App.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  
} from "react-router-dom";
import { Layout } from "antd";

import { Provider } from "react-redux";
import store from "./stateManagement/store";
import { ListProductPage, DetailProduct } from "./pages";
import MainHeader from "./components/Header/Header";
import MainFooter from "./components/Footer/Footer";

function App() {
  
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Provider store={store}>
          
              <MainHeader />
              <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<ListProductPage />} />
                <Route path={`detailproduct`} element={<DetailProduct />} />
                <Route path="*" element={<Navigate to="/products" />} />
              </Routes>
              <MainFooter />
            
          </Provider>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
