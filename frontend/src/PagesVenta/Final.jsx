import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Final.module.css";
import { Botongen } from "../Components/Boton";
import donut from "./qrt.png";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { DataStore } from '@aws-amplify/datastore';
import { Addticket } from '../models';


export function FinalVenta() {
    const url = "http://85.85.68.198:8000/api/addticket/"
    const location = useLocation()
    const {         
    titulo,
    discoteca,
    dia,
    mes,
    ciudad,
    precio,
    instagram,
    n_tel_vend,
    estado } = location.state

    DataStore.save(
      new Addticket({
      "titulo": titulo,
      "discoteca": discoteca,
      "ciudad": ciudad,
      "dia": dia,
      "mes": mes,
      "precio": parseFloat(precio),
      "instagram": instagram,
      "n_tel_comp": "9999999999",
      "n_tel_vend": n_tel_vend,
      "estado": false
    })
    );


    return(
        <div>
      <header>
      </header>
      <main>
        <h1 className={styles.text11}>¡Muchas gracias! </h1>
        <h2 className={styles.text11}>Tienes que mostrarle este QR a tu comprador para finalizar la transacción</h2>
        <div className={styles.div1}>
          <img className={styles.img1} src={donut} alt="" />
        </div>
      </main>
    </div>
    );
  }