import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loggerMiddleware } from "./loggerMiddleware";
import rootReducer from "./reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(thunk, loggerMiddleware), composeEnhancers())
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
