import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer";

interface ICardsObjects {
  [key: string]: ICards,
}
interface ICards {
  id: string,
  title: string,
  description: string,
  imageLink: string,
  price: number,
}

interface IBasketObjects {
  [key: string]: IBasket,
}
interface IBasket {
  id: string,
  count: number
}

export interface IRootState {
  cards: ICardsObjects,
  basket: IBasketObjects,
}

const middlewares = applyMiddleware()
export const store = createStore(reducer, composeWithDevTools(middlewares))
