import {IBasketItem} from "../App/App";

import styles from "./BasketCard.module.css";


const BasketCard = ({id, title, imageLink, price, count}: IBasketItem) => {
  return (
    <tr>
      <td><img src={imageLink} width="100" alt="card item"/></td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{count}</td>
      <td><a href="#" className={styles.deletebtn} data-id="2">X</a></td>
    </tr>
  )
}

export default BasketCard
