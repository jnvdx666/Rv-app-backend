import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "../Components/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from "react-router-dom";

export function DondeSalir() {

    const location = useLocation()
    const { datos } = location.state

    return(
        <div>
      <header>
        <h2 className={styles.tit2}>¿Dónde quieres salir?</h2>
      </header>
      <main>
        <MoviesGrid  enlace="/cal" dir="Calendario" datos={datos} />
      </main>
    </div>
    );
  }