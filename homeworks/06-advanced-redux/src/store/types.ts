import { State } from "../types";
import {
  PIZZA_VIEWED,
  PIZZA_ADDED_INTO_BASKET,
  PIZZA_REMOVED_FROM_BASKET,
  LOAD_ITEMS,
} from "./constants";

interface LoadItemsAction {
  type: typeof LOAD_ITEMS;
}
interface PizzaViewedAction {
  type: typeof PIZZA_VIEWED;
  payload: {
    items: State["pizza"];
  };
}
interface PizzaAddIntoBasketAction {
  type: typeof PIZZA_ADDED_INTO_BASKET;
  payload: {
    _id: string;
  };
}
interface PizzaRemoveIntoBasketAction {
  type: typeof PIZZA_REMOVED_FROM_BASKET;
  payload: {
    _id: string;
  };
}

export type LoadItemsActionCreator = () => LoadItemsAction;
export type PizzaViewedActionCreator = (
  items: State["pizza"]
) => PizzaViewedAction;
export type PizzaAddIntoBasketActionCreator = (
  _id: string
) => PizzaAddIntoBasketAction;
export type PizzaRemoveIntoBasketActionCreator = (
  _id: string
) => PizzaRemoveIntoBasketAction;

export type IActions =
  | LoadItemsAction
  | PizzaViewedAction
  | PizzaAddIntoBasketAction
  | PizzaRemoveIntoBasketAction;
