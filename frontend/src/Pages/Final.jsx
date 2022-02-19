import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Final.module.css";
import { Botongen } from "../Components/Boton";
import donut from "./donut.svg";
import { Checkout } from "./Checkout"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function Final() {
    return(
        <div>
      <header>
      </header>
      <main>
        <h1 className={styles.text11}>¡Muchas gracias! </h1>
        <h1 className={styles.text11}>¡No tardes en ponerte en contacto con tu vendedor!</h1>
        <div className={styles.divimg2}><img className={styles.img2} src={donut} alt="" /></div>
        <h3 className={styles.new1}>Este es el instagram de tu vendedor:</h3>
        <div className={styles.boton1}><Botongen texto={"@tu_vendedor"}/></div>
      </main>
    </div>
    );
  }