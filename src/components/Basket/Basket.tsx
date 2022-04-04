import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";

import styles from "./Basket.module.css";


interface Props {
  setIsBasketOpen: (arg: boolean) => void
}

const Basket = ({setIsBasketOpen}: Props) => {
  const handleBasketClose = () => setIsBasketOpen(false)
  
  return (
    <div className={styles.cart}>
      <span onClick={handleBasketClose} className={styles.closecart}>
        <FontAwesomeIcon icon={faTimes}/>
      </span>
      <div id="miniCart">
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
          <tbody/>
        </table>
        <a href="#" id="vaciarCarrito" className={`button ${styles.uFullWidth}`}>
          Clean Cart <FontAwesomeIcon icon={faTrash}/>
        </a>
      </div>
    </div>
  )
}

export default Basket
