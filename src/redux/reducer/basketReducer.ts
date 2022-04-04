import produce from "immer";
import {INCREMENT, REMOVE, REMOVE_ALL} from "../constants";

const initialState = {}


// eslint-disable-next-line
export default (state = initialState, action: any) => {
  const {type, payload} = action
  switch (type) {

    case INCREMENT:
      return produce(state, (draft: any) => {
        const {id} = payload
        draft[id] = {id, count: draft[id]?.count ? draft[id].count + 1 : 1}
      })

    case REMOVE_ALL:
      return {}

    case REMOVE:
      return produce(state, (draft: any) => {
        const {id} = payload
        const filteredDraft = Object.values(draft).filter((draftId: any) => draftId.id !== id)
        return filteredDraft.reduce((acc: any, item: any) => ({...acc, [item.id]: item}), {})
      })

    default:
      return state
  }
}
