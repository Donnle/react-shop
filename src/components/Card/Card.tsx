import {connect} from "react-redux";
import {addBasketItem} from "../../redux/action";

import styles from "./Card.module.css";


interface Props {
  id: string,
  title: string,
  description: string,
  imageLink: string,
  price: number,
  addBasketItem?: () => void,
}

const Card = ({title, description, imageLink, price, addBasketItem}: Props) => (
  <div className={styles.card}>
    <img src={imageLink} alt="Card item"/>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}</p>
    <span onClick={addBasketItem} className="button" data-id="1">Add to Card</span>
  </div>
)

const mapDispatchToProps = (dispatch: any, props: Props) => ({
  addBasketItem: () => dispatch(addBasketItem({id: props.id}))
})

export default connect(null, mapDispatchToProps)(Card)
