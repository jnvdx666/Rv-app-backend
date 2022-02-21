import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./CreditCard.module.css";
import { Botongen } from "../Components/Boton";
import copa1 from "./1copa.svg";
import Tarjetas from "./Tarjetas.svg";
import { Checkout } from "./Checkout"
import { Final } from "./Final"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


export function CreditCard() {

  const location = useLocation()
  const { datos } = location.state

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
      <Link to="/credit-card" component={CreditCard} className={styles.nolink}>
          <div className={styles.boton4}>
            <Botongen texto={"Añadir Tarjeta +"} />
          </div>
        </Link>

      <div className={styles.grid3}>
          <div className={styles.divfoto}> 
            <h3 className={styles.tex4}>Precio Total:</h3>
          </div>
          <div className={styles.divtexto}> 
            <h3 className={styles.tex5}>{datos.precio+0.35}€</h3>
          </div>
        </div>
        <Link to="/gracias" component={Final} state={{data:datos}} className={styles.nolink}>
          <div className={styles.boton3}>
            <Botongen texto={"Realizar pago"} />
          </div>
        </Link>
    </main>
  </div>
  );
}