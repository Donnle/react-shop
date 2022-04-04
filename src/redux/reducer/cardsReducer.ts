import {v4 as uuid} from "uuid";

const initialState = [
  {
    id: uuid(),
    title: 'Nike Air Max Plus',
    description: 'Men\'s Shoes',
    imageLink: "https://picsum.photos/200",
    price: 180
  },
  {
    id: uuid(),
    title: 'Nike Quest Premium',
    description: 'Women\'s Road Running Shoes',
    imageLink: "https://picsum.photos/200",
    price: 150
  },
  {
    id: uuid(),
    title: 'Nike Air Max 270',
    description: 'Men\'s Shoes',
    imageLink: "https://picsum.photos/200",
    price: 160
  },
]
const normalizeInitialState = initialState.reduce((acc, item) => ({...acc, [item.id]: item}), {})

// eslint-disable-next-line
export default (state = normalizeInitialState) => state
