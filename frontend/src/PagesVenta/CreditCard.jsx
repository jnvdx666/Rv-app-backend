import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./CreditCard.module.css";
import { Botongen } from "../Components/Boton";
import copa1 from "./1copa.svg";
import Tarjetas from "./Tarjetas.svg";
import { FinalVenta } from "./Final"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


export function CreditCardVenta() {
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

  return(
      <div>
    <header>
    </header>
    <main>
      <div className={styles.div2}>
        <h3 className={styles.tit1} >Tarjetas</h3>
      </div>
      <div className={styles.div1}>
        <img className={styles.tarjetas} src={Tarjetas} alt="" />
      </div>
      <Link to="/credit-card-venta" component={CreditCardVenta} className={styles.nolink}>
          <div className={styles.boton4}>
            <Botongen texto={"Añadir Tarjeta +"} />
          </div>
        </Link>

      <div className={styles.grid3}>
          <div className={styles.divfoto}> 
            <h3 className={styles.tex4}>Comisión:</h3>
          </div>
          <div className={styles.divtexto}> 
            <h3 className={styles.tex5}>0.50€</h3>
          </div>
      </div>

      <div className={styles.grid4}>
          <div className={styles.divfoto}> 
            <h3 className={styles.tex4}>Precio Total:</h3>
          </div>
          <div className={styles.divtexto}> 
            <h3 className={styles.tex5}>{precio - 0.50}€</h3>
          </div>
      </div>

        <Link to="/gracias-venta" component={FinalVenta} state={{ titulo, discoteca, dia, mes, ciudad, precio, instagram, n_tel_vend, estado}} className={styles.nolink}>
          <div className={styles.boton3}>
            <Botongen texto={"Realizar pago"} />
          </div>
        </Link>
    </main>
  </div>
  );
}