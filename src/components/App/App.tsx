import {useState} from "react";
import Header from "../Header";
import Basket from "../Basket";
import Card from "../Card";

import styles from './App.module.css';


const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)

  return (
    <>
      <Header setIsBasketOpen={setIsBasketOpen}/>
      {isBasketOpen ? <Basket setIsBasketOpen={setIsBasketOpen}/> : false}
      <div className={`${styles.cards} container`}>
        <h1>EXPLORE THE COLLECTION</h1>
        <Card title='Nike Air Max Plus' description={'Men\'s Shoes'} price={180}/>
        <Card title='Nike Quest Premium' description={'Women\'s Road Running Shoes'} price={180}/>
        <Card title='Nike Air Max 270' description={'Men\'s Shoes'} price={160}/>
      </div>
    </>
  );
}

export default App;
