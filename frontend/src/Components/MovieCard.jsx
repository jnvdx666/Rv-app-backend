import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "" + movie.poster_path;

  if (movie.title == "Bilbo") {
    return (
      <li className={styles.movieCard}>
        <img
          width={230}
          height={210}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.degradado}></div>
        <h2 className={styles.tit1}>{movie.title}</h2>
      </li>
    );
  } 

  else {
    return (
      <li className={styles.movieCardw}>
        <img
          width={230}
          height={210}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.degradado}></div>
        <h2 className={styles.tit1}>{movie.title}</h2>
      </li>
    );
  } 

}

