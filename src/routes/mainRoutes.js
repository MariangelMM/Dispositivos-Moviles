import React from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { MainHeader, Footer } from "../components";
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
                <Route path={main.path} exact>
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
            
                <Route
                  path={main.error404.path}
                  component={main.error404.component}
                />
              </Switch>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  </div>
);

export default MainRoutes;
