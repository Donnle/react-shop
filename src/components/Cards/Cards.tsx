import {connect} from "react-redux";
import Card from "../Card";
import {cardsValuesSelector} from "../../redux/selector";
import {IRootState} from "../../redux/store";

import styles from "./Cards.module.css";

interface IBasketItem {
  id: string,
  title: string,
  description: string,
  price: number,
  imageLink: string,
}

interface Props {
  cards: Array<IBasketItem>,
}

const Cards = ({cards}: Props) => (
  <div className={`${styles.cards} container`}>
    <h1>EXPLORE THE COLLECTION</h1>
    {cards?.map((card: IBasketItem) =>
      <Card key={card.id} {...card}/>
    )}
  </div>
)

const mapStateToProps = (state: IRootState) => ({
  cards: cardsValuesSelector(state)
})

export default connect(mapStateToProps)(Cards)
