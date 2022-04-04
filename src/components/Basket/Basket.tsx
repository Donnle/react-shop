import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import BasketCard from "../BasketCard";
import {IRootState} from "../../redux/store";
import {basketValuesSelector} from "../../redux/selector";
import {removeAllBasketItems} from "../../redux/action";

import styles from "./Basket.module.css";

interface IItemInBasket {
  id: string,
  count: string,
}

interface Props {
  itemsInBasket: Array<IItemInBasket>,
  setIsBasketOpen: (arg: boolean) => void,
  removeAllBasketItem: () => void,
}

const Basket = ({itemsInBasket, setIsBasketOpen, removeAllBasketItem}: Props) => {
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
          {itemsInBasket?.map((itemInBasket: IItemInBasket) =>
            <BasketCard key={itemInBasket.id} {...itemInBasket}/>
          )}
          </tbody>
        </table>
        <span className='button' onClick={removeAllBasketItem}>
          Clean Cart <FontAwesomeIcon icon={faTrash}/>
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = (state: IRootState) => ({
  itemsInBasket: basketValuesSelector(state)
})
const mapDispatchToProps = (dispatch: any) => ({
  removeAllBasketItem: () => dispatch(removeAllBasketItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
