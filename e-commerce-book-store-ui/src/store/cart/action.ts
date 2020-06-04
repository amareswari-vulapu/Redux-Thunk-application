// This file contains Action creators for Cart related actions
import { CartActionTypes, Cart, cartState } from "./types";
import { Inventory } from "../inventory/types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../index";

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;

export const addToCart: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  Inventory,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART_FAILURE,
        payload: null
      });
    }
  };
};

export const removeFromCart: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  Inventory,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.REMOVE_FROM_CART_FAILURE,
        payload: null
      });
    }
  };
};

export const addToMyOrders: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  Inventory,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CartActionTypes.ADD_TO_MY_ORDERS,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.ADD_TO_My_ORDERS_FAILURE,
        payload: null
      });
    }
  };
};


