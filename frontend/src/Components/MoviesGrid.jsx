import { MovieCard } from "./MovieCard";
import sitios from "../sitios.json";
import styles from "./MoviesGrid.module.css";
import { Calendario } from "../Pages/Calendario";
import { CalendarioVenta } from "../PagesVenta/Calendario";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function MoviesGrid({enlace, dir, datos}) {

    return (
      <ul className={styles.moviesGrid}>
        {sitios.map((sitios) => (
          <Link to={enlace} component={dir} state={datos} className={styles.nolink}>
          <MovieCard key={sitios.id} movie={sitios} />
          </Link>
        ))}
      </ul>
    );
  
}
