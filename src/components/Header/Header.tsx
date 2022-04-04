import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";


interface Props {
  setIsBasketOpen: (arg: boolean) => void,
}

const Header = ({setIsBasketOpen}: Props) => {
  const handleBasketOpen = () => setIsBasketOpen(true)
  return (
    <header>
      <div className="container">
        <a href="#" className={styles.logo}>CompanyLogo</a>
        <span onClick={handleBasketOpen} className={styles.bag}>
          <FontAwesomeIcon icon={faShoppingBag}/>
        </span>
      </div>
    </header>
  )
}

export default Header
