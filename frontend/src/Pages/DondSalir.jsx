import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "../Components/App.module.css";


export function DondeSalir() {
    return(
        <div>
      <header>
        <h2 className={styles.tit2}>¿Dónde quieres salir?</h2>
      </header>
      <main>
        <MoviesGrid  enlace="/cal" dir="Calendario" />
      </main>
    </div>
    );
  }