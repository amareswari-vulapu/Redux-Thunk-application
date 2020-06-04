// This file creates the Root Reducer by Combining all the reducers.
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { InventoryReducer } from "./inventory/reducer";
import { InventoryState } from "./inventory/types";
import { cartReducer } from "./cart/reducer";
import { cartState, SelectedItems } from "./cart/types";
import { RouterState } from "connected-react-router";
import { selectedItemsReducer } from "./selected-product/reducer";

export interface ApplicationState {
  cart: cartState;
  inventory: InventoryState;
  router: RouterState;
  selectedItems: SelectedItems;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cart: cartReducer,
    inventory: InventoryReducer,
    router: connectRouter(history),
    selectedItems: selectedItemsReducer
  });
