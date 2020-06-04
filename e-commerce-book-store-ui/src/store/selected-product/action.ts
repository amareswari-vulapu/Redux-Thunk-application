import { SelectedItems, SelectedItemTypes } from "./types";
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

export const addToSelectedItems: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  Inventory,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: SelectedItemTypes.ADD_TO_SELECTED_ITEMS,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: SelectedItemTypes.ADD_TO_SELECTED_ITEMS_FAILURE,
        payload: null
      });
    }
  };
};

