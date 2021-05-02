import { createStore, compose } from "redux";
import rootReducer from "./reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, undefined, composeEnhancers());

store.dispatch({ type: "UPDATE_BALANCE", payload: 1000.0 }); // balance = 1000.0
store.dispatch({ type: "CREDIT", payload: 200.0 }); // 800.0
store.dispatch({ type: "DEBIT", payload: 50.0 }); // 850.0
store.dispatch({ type: "SET_BALANCE_WITH_TAX", payload: 14.0 }); // 850.0 * (1 - 0.14) = 731
export default store;
