import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";


interface Props {

}

const Header = (props: Props) => {
  return (
    <header>
      <div className="container">
        <a href="#" className={styles.logo}>CompanyLogo</a>
        <a href="#" className={styles.bag}>
          <FontAwesomeIcon icon={faShoppingBag}/>
        </a>
      </div>
    </header>
  )
}

export default Header
