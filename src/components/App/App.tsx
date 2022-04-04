import {useState} from "react";
import Header from "../Header";
import Basket from "../Basket";
import Cards from "../Cards";


const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)

  return (
    <>
      <Header setIsBasketOpen={setIsBasketOpen}/>
      {isBasketOpen ? <Basket setIsBasketOpen={setIsBasketOpen}/> : false}
      <Cards/>
    </>
  );
}

export default App;
