import { Dispatch } from "redux";
import { getPizza } from "../services/api";
import { pizzaViewed } from "./actions";

export const loadItemsThunkCreator = () => (dispatch: Dispatch) => {
  getPizza().then((pizza) => {
    dispatch(pizzaViewed(pizza.items));
  });
};
