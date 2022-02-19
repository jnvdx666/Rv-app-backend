import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./EscQR.module.css";
import { Botongen } from "../Components/Boton";
import QRscanner from "./QRscanner.svg";
import { Checkout } from "./Checkout"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function EscQR() {
    return(
        <div>
      <header>
      </header>
      <main>
      <h1 className={styles.text11}>Escanear QR</h1>
        <div className={styles.div1}>
          <img className={styles.img1} src={QRscanner} alt="" />
        </div>
          <div className={styles.boton1} ><Botongen texto={"Escanear"}/></div>
      </main>
    </div>
    );
  }