import styles from "./Card.module.css";

export function Card({ nombre , foto }) {
  const imageUrl = foto
  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={210}
        className={styles.movieImage}
        src={imageUrl}
        alt={nombre}
      />
      <div className={styles.degradado}></div>
      <h2 className={styles.tit1}>{nombre}</h2>
    </li>
  );
}
