import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "../Components/App.module.css";
import App from "../App"
import { connect } from 'react-redux';

export function DondeSalirVenta() {

    const ciudad = "Bilbao"


    return(
        <div>
      <header>
        <h2 className={styles.tit2}>Elige tu ubicación</h2>
      </header>
      <main>
        <MoviesGrid enlace="/cal-venta" dir="CalendarioVenta"/>
      </main>
    </div>
    );
  }