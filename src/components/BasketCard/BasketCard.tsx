import {connect} from "react-redux";
import {basketItemSelector} from "../../redux/selector";
import {removeBasketItem} from "../../redux/action";
import {IRootState} from "../../redux/store";

import styles from "./BasketCard.module.css";

interface IBasketItem {
  id: string,
  title: string,
  description: string,
  imageLink: string,
  price: number,
}

interface Props {
  id: string,
  count: string,
  basketItem?: IBasketItem,
  removeBasketItem?: () => void,
}


const BasketCard = ({count, basketItem, removeBasketItem}: Props) => (
  <tr>
    <td><img src={basketItem?.imageLink} width="100" alt="card item"/></td>
    <td>{basketItem?.title}</td>
    <td>${basketItem?.price}</td>
    <td>{count}</td>
    <td>
      <button className={styles.deletebtn} onClick={removeBasketItem} data-id="2">X</button>
    </td>
  </tr>
)


const mapStateToProps = (state: IRootState, props: Props) => ({
  basketItem: basketItemSelector(state, props),
})
const mapDispatchToProps = (dispatch: any, props: Props) => ({
  removeBasketItem: () => dispatch(removeBasketItem({id: props.id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketCard)
