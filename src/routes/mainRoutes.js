import React from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import MainHeader  from "../components/Header/Header";
import MainFooter from "../components/Footer/Footer";
import { main } from "./routes";
import { Layout } from "antd";

const { Content } = Layout;

const MainRoutes = () => (
  <div>
    <BrowserRouter>
      <Layout /*   */>
        <MainHeader />
       
        <Layout>
          <Content className="content-layout">
            
            <div className="site-layout-background">
              <Switch>

                <Route path={main.path} exact >
                  <Redirect to="/products" />
                </Route>

                <Route
                  path={main.products.path}
                  exact
                  component={main.products.component}
                />
                <Route
                  path={main.detailProduct.path}
                  component={main.detailProduct.component}
                />
            
                <Route path={main.error404.path}  exact>  <Redirect to="/products" /> </Route>
              </Switch>
            </div>
          </Content>
          <MainFooter />
        </Layout>
      </Layout>
    </BrowserRouter>
  </div>
);

export default MainRoutes;


