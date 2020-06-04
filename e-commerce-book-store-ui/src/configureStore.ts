// File to configure the store with reducers and middlewares used to update the state.
import { Store, createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, createRootReducer } from "./store";

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history), thunk)
  );
  return store;
}
