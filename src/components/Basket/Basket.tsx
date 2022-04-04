import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import BasketCard from "../BasketCard";
import {IBasketItem} from "../App/App";

import styles from "./Basket.module.css";


interface Props {
  setIsBasketOpen: (arg: boolean) => void,
  itemsInBasket: Array<IBasketItem>,
}

const Basket = ({setIsBasketOpen, itemsInBasket}: Props) => {
  const handleBasketClose = () => setIsBasketOpen(false)

  return (
    <div className={styles.cart}>
      <span onClick={handleBasketClose} className={styles.closecart}>
        <FontAwesomeIcon icon={faTimes}/>
      </span>
      <div id={styles.miniCart}>
        <table id="listaCarrito" className={styles.uFullWidth}>
          <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {itemsInBasket?.map((itemInBasket: IBasketItem) =>
            <BasketCard {...itemInBasket}/>
          )}
          </tbody>
        </table>
        <span className='button'>
          Clean Cart <FontAwesomeIcon icon={faTrash}/>
        </span>
      </div>
    </div>
  )
}

export default Basket
