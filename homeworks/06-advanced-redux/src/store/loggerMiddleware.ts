import { Pizza } from "./../types";
import { Middleware } from "redux";
import { PIZZA_VIEWED } from "./constants";

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  console.log(type);
  const { pizza }: { pizza: Pizza[] } = store.getState();
  const p = pizza.filter((i) => i._id === payload._id)[0];
  const bodyData: {
    eventName: string;
    pizzaName?: Pizza["name"];
    pizzaPrice?: Pizza["price"];
  } =
    type === PIZZA_VIEWED
      ? {
          eventName: type,
        }
      : {
          eventName: type,
          pizzaName: p.name,
          pizzaPrice: p.price,
        };

  console.log(bodyData);
  fetch("http://localhost:3001/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
    .then((json) => {
      console.log(json);
    })
    .catch((ex) => {
      console.log(ex);
    });
  next(action);
};
