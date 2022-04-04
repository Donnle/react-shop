import {createSelector} from "reselect";
import {IRootState} from "./store";

export const basketObjectSelector = (state: IRootState) => state.basket
export const cardsObjectSelector = (state: IRootState) => state.cards


interface IBasketItemSelector {
  id: string,
  count: string
}
export const basketItemSelector = (state: IRootState, {id}: IBasketItemSelector) => state.cards[id]


export const basketValuesSelector = createSelector(basketObjectSelector, Object.values)
export const cardsValuesSelector = createSelector(cardsObjectSelector, Object.values)




