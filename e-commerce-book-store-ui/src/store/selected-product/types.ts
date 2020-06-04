// This file conyains the types declared for all actions related to selected item.
import { Inventory } from "../inventory/types";

export interface SelectedItems {
    items: Inventory[];
  }
  
export enum SelectedItemTypes {
  ADD_TO_SELECTED_ITEMS = "@@cart/ADD_TO_SELECTED_ITEMS",
  ADD_TO_SELECTED_ITEMS_FAILURE = "@@cart/ADD_TO_SELECTED_ITEMS_FAILURE"
}