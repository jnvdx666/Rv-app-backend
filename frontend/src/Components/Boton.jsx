import styles from "./Boton.module.css";

export function Botongen({ texto }) {
  return (
    <li className={styles.movieCard}>
      <div className={styles.degradado}></div>
      <h2 className={styles.tit1}>{ texto }</h2>
    </li>
  );
}