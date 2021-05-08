import { State } from "../types";
import { IActions } from "./types";
import {
  PIZZA_VIEWED,
  PIZZA_ADDED_INTO_BASKET,
  PIZZA_REMOVED_FROM_BASKET,
} from "./constants";

const defaultState: State = {
  pizza: [],
  basket: [],
};

export default function pizzaStoreReducer(
  state = defaultState,
  action: IActions
): State {
  switch (action.type) {
    case PIZZA_VIEWED: {
      const { items } = action.payload;
      return {
        ...state,
        pizza: items,
      };
    }
    case PIZZA_ADDED_INTO_BASKET: {
      const { _id } = action.payload;
      const { pizza, basket } = state;
      const p = pizza.filter((x) => x._id === _id)[0];
      const indexInBasket = basket.findIndex((i) => i._id === _id);
      if (indexInBasket === -1) {
        return {
          ...state,
          basket: [...basket, { ...p, count: 1 }],
        };
      } else {
        const newBasket = [...basket];
        newBasket[indexInBasket].count = newBasket[indexInBasket].count + 1;
        return {
          ...state,
          basket: newBasket,
        };
      }
    }
    case PIZZA_REMOVED_FROM_BASKET: {
      const { _id } = action.payload;
      const { basket } = state;
      const indexInBasket = basket.findIndex((i) => i._id === _id);
      return {
        ...state,
        basket:
          basket[indexInBasket].count === 1
            ? basket.filter((i) => i._id !== _id)
            : basket.map((i) =>
                i._id === _id
                  ? {
                      ...i,
                      count: i.count - 1,
                    }
                  : i
              ),
      };
    }
    default:
      return state;
  }
}
