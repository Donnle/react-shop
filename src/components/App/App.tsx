import {v4 as uuid} from "uuid";
import {useState} from "react";
import Header from "../Header";
import Basket from "../Basket";
import Cards from "../Cards";


export interface IBasketItem {
  id: string,
  title: string,
  imageLink: string,
  price: number,
  count: number,
}

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
  const [itemsInBasket, setItemsInBasket] = useState<Array<IBasketItem>>([
    {
      id: uuid(),
      title: 'Nike Air Max Plus',
      imageLink: "https://picsum.photos/200",
      price: 180,
      count: 2,
    },
  ])
  return (
    <>
      <Header setIsBasketOpen={setIsBasketOpen}/>
      {isBasketOpen ? <Basket itemsInBasket={itemsInBasket} setIsBasketOpen={setIsBasketOpen}/> : false}
      <Cards/>
    </>
  );
}

export default App;
