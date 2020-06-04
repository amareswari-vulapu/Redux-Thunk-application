// This file contains Reducers for selected item.
import { Reducer } from "redux";
import { SelectedItems, SelectedItemTypes } from "./types";
export const initialState: SelectedItems = {
    items: []
};

const reducer: Reducer<SelectedItems> = (state = initialState, action) => {
  switch (action.type) {
    case SelectedItemTypes.ADD_TO_SELECTED_ITEMS: {
        return { ...state, items: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as selectedItemsReducer };
