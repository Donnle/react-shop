import {INCREMENT, REMOVE, REMOVE_ALL} from "./constants";

export const addBasketItem = (payload: any) => ({type: INCREMENT, payload})
export const removeAllBasketItems = () => ({type: REMOVE_ALL})
export const removeBasketItem = (payload: any) => ({type: REMOVE, payload})
