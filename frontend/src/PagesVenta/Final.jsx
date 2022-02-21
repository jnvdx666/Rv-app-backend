import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Final.module.css";
import { Botongen } from "../Components/Boton";
import donut from "./qrt.png";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


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

    fetch(url,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      titulo: titulo,
      discoteca: discoteca,
      dia: dia,
      mes: mes,
      ciudad: ciudad,
      precio: precio,
      instagram: instagram,
      n_tel_vend: n_tel_vend,
      estado: false
    })
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })


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