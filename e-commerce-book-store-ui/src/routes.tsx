import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar-comp";
import HomePage from "./components/home-page";
import Cart from "./components/cart";
import MyOrders from "./components/my-orders-page";
// This file contains all the routings to different pages in application.
import SelectedItem from "./components/selected-product";
const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Navbar>
            <HomePage />
          </Navbar>
        )}
      />
      <Route
        exact
        path="/myorders"
        render={() => (
          <Navbar>
            <MyOrders />
          </Navbar>
        )}
      />
      <Route
        exact
        path="/selecteditem"
        render={() => (
          <Navbar>
            <SelectedItem />
          </Navbar>
        )}
      />
      <Route
        path="/cart"
        render={() => (
          <Navbar>
            <Cart />
          </Navbar>
        )}
      />
    </Switch>
  </div>
);

export default Routes;
