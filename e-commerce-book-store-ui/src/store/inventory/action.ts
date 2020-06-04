import { InventoryActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

// Thunk Action Creator to make asynchronous call using fetch API to get the data 
// from mock JSON server - http://localhost:3001/books
export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): any => {
    try {
      fetch("http://localhost:3001/books", {
        method: "GET",
        headers: {}
      })
      .then(response=> response.json())
      .then(resp => {
        dispatch( { 
            type:  InventoryActionTypes.FETCH_SUCCESS,
            payload: resp.data
        }) 
      })
     
    } catch (e) {
      return dispatch({
        type: InventoryActionTypes.FETCH_ERROR
      });
    }
  };
};


