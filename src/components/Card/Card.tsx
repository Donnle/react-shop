import styles from "./Card.module.css";


interface Props {
  title: string,
  description: string,
  price: number | string,
}

const Card = ({title, description, price}: Props) => {
  return (
    <div className={styles.card}>
      <img src="https://picsum.photos/200" alt=""/>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <a href="#" className="button" data-id="1">Add to Card</a>
    </div>
  )
}

export default Card