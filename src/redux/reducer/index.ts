import {combineReducers} from "redux";
import basketReducer from "./basketReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  cards: cardsReducer,
  basket: basketReducer,
})
