import styles from "./Card.module.css";


interface Props {
  id: string,
  title: string,
  description: string,
  imageLink: string,
  price: number,
}

const Card = ({id, title, description, imageLink, price}: Props) => {
  return (
    <div className={styles.card}>
      <img src={imageLink} alt="Card item"/>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <a href="#" className="button" data-id="1">Add to Card</a>
    </div>
  )
}

export default Card
