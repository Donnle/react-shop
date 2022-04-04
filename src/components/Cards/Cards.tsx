import {v4 as uuid} from "uuid";
import Card from "../Card";

import styles from "./Cards.module.css";


interface Props {

}

const Cards = (props: Props) => {
  const cards = [
    {id: uuid(), title: 'Nike Air Max Plus', description: 'Men\'s Shoes', price: 180},
    {id: uuid(), title: 'Nike Quest Premium', description: 'Women\'s Road Running Shoes', price: 150},
    {id: uuid(), title: 'Nike Air Max 270', description: 'Men\'s Shoes', price: 160},
  ]
  return (
    <div className={`${styles.cards} container`}>
      <h1>EXPLORE THE COLLECTION</h1>
      {cards.map((card) =>
        <Card key={card.id} {...card}/>
      )}
    </div>
  )
}

export default Cards
