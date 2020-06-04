// This file contains Reducers for Cart related actions
import { Reducer } from "redux";
import { CartActionTypes, cartState } from "./types";

export const initialState: cartState = {
  data: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false,
  checkout: false
};

const reducer: Reducer<cartState> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        checkout: state.checkout,
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload]
        }
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,        
          items: state.data.items.filter(item => item !== action.payload)
        }
      };
    }
    case CartActionTypes.ADD_TO_MY_ORDERS: {
      return {
        errors: state.errors,
        loading: state.loading,
        checkout: true,
        data: {
          ...state.data,
          items: [...state.data.items]
        }
      };
    }
    default: {
      return state;
    }
  }
};


export { reducer as cartReducer };
