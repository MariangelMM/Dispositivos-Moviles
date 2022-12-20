import React from "react";

import "./App.css";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  MemoryRouter,
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
            <MemoryRouter>
              <MainHeader />
              <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<ListProductPage />} />
                <Route path={`detailproduct`} element={<DetailProduct />} />
                <Route path="*" element={<Navigate to="/products" />} />
              </Routes>
              <MainFooter />
            </MemoryRouter>
          </Provider>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
