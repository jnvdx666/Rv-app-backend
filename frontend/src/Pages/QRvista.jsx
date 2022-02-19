import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./QRvista.module.css";
import { Botongen } from "../Components/Boton";
import QR from "./qrcode.jpg";
import { Checkout } from "./Checkout"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function QRvista() {
    return(
        <div>
      <header>
      </header>
      <main>
      <h1 className={styles.text11}>Muestra este QR a tu comprador</h1>
        <div className={styles.div1}>
          <img className={styles.img1} src={QR} alt="" />
        </div>
      </main>
    </div>
    );
  }