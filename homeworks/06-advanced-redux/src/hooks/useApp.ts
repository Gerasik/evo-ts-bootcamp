import { State } from "./../types";
import { Pizza } from "../types";
import { useAppSelector, useAppDispatch } from ".";
import { pizzaAddIntoBasket, pizzaRemoveIntoBasket } from "../store/actions";

export function useApp() {
  const { pizza, basket } = useAppSelector((state): State => state);
  const dispatch = useAppDispatch();

  return {
    totalPrice: basket.reduce(
      (acc, p: Pizza & { count: number }) => acc + p.price * p.count,
      0
    ),
    pizza,
    basket,
    plusPizzaBucket: (_id: string) => dispatch(pizzaAddIntoBasket(_id)),
    minusPizzaBucket: (_id: string) => dispatch(pizzaRemoveIntoBasket(_id)),
  };
}
