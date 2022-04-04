import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";

import styles from './App.module.css';


const App = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>CompanyLogo</a>
          <a href="#" className={styles.bag}>
            <FontAwesomeIcon icon={faShoppingBag}/>
          </a>
        </div>
      </header>

      <div className={styles.cart}>
        <a href="#" className={styles.closecart}>
          <FontAwesomeIcon icon={faTimes}/>
        </a>
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
          <a href="#" id="vaciarCarrito" className={`${styles.button} ${styles.uFullWidth}`}>
            Clean Cart <FontAwesomeIcon icon={faTrash}/>
          </a>
        </div>
      </div>
      <div className={`${styles.cards} ${styles.container}`}>
        <h1>EXPLORE THE COLLECTION</h1>
        <div className={styles.card}>
          <img src="https://picsum.photos/200" alt=""/>
          <p className={styles.title}>Nike Air Max Plus</p>
          <p className={styles.description}>Men's Shoes</p>
          <p className={styles.price}>$180</p>
          <a href="#" className={styles.button} data-id="1">Add to Card</a>
        </div>

        <div className={styles.card} >
          <img src="https://picsum.photos/200" alt=""/>
          <p className={styles.title}>Nike Quest Premium</p>
          <p className={styles.description}>Women's Road Running Shoes</p>
          <p className={styles.price}>$150</p>
          <a href="#" className={styles.button}  data-id="2">Add to Card</a>
        </div>

        <div className={styles.card}>
          <img src="https://picsum.photos/200" alt=""/>
          <p className={styles.title}>Nike Air Max 270</p>
          <p className={styles.description}>Men's Shoes</p>
          <p className={styles.price}>$160</p>
          <a href="#" className={styles.button} data-id="3">Add to Card</a>
        </div>
      </div>
    </>
  );
}

export default App;
