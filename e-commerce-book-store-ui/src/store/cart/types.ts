// This file conyains the types declared for all actions related to Cart.
import { Inventory } from "../inventory/types";

export interface Cart {
  id: number;
  items: Inventory[];
}

export interface MyOrders {
  items: Inventory[];
}

export interface SelectedItems {
  items: Inventory[];
}

export enum CartActionTypes {
  ADD_TO_CART = "@@cart/ADD_TO_CART",
  ADD_TO_CART_FAILURE = "@@cart/ADD_TO_CART_FAILURE",
  REMOVE_FROM_CART = "@@cart/REMOVE_FROM_CART",
  REMOVE_FROM_CART_FAILURE = "@@cart/REMOVE_FROM_CART_FAILURE",
  ADD_TO_MY_ORDERS = "@@cart/ADD_TO_My_ORDERS",
  ADD_TO_My_ORDERS_FAILURE = "@@cart/ADD_TO_My_ORDERS_FAILURE"
}

export interface cartState {
  readonly loading: boolean;
  readonly checkout?: boolean;
  readonly data: Cart;
  readonly errors?: string;
}