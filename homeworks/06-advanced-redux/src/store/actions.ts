import {
  PIZZA_VIEWED,
  PIZZA_ADDED_INTO_BASKET,
  PIZZA_REMOVED_FROM_BASKET,
  LOAD_ITEMS,
} from "./constants";
import {
  LoadItemsActionCreator,
  PizzaViewedActionCreator,
  PizzaAddIntoBasketActionCreator,
  PizzaRemoveIntoBasketActionCreator,
} from "./types";

export const loadItems: LoadItemsActionCreator = () => ({
  type: LOAD_ITEMS,
});

export const pizzaViewed: PizzaViewedActionCreator = (items) => ({
  type: PIZZA_VIEWED,
  payload: {
    items,
  },
});

export const pizzaAddIntoBasket: PizzaAddIntoBasketActionCreator = (_id) => ({
  type: PIZZA_ADDED_INTO_BASKET,
  payload: {
    _id,
  },
});

export const pizzaRemoveIntoBasket: PizzaRemoveIntoBasketActionCreator = (
  _id
) => ({
  type: PIZZA_REMOVED_FROM_BASKET,
  payload: {
    _id,
  },
});
