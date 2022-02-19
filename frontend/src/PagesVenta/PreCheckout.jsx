import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./PreCheckout.module.css";
import { Botongen } from "../Components/Boton";
import copa1 from "./1copa.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CreditCard } from "../Pages/CreditCard";


export function PreCheckoutVenta() {
    return(
        <div>
      <header>
      </header>
      <main>
        <div className={styles.div1}>
          <img className={styles.img1} src="https://lh5.googleusercontent.com/p/AF1QipMQyHP8poRIAkHSksaCFHoT4wD7dhOzfRujRfU_" alt="" />
        </div>
        <h1 className={styles.text11}>Entrada Moma</h1>
        <div className={styles.divimg2}><img className={styles.img2} src={copa1} alt="" /></div>
        <Link to="/credit-card-venta" component={CreditCard} discoteca={"Moma"} className={styles.nolink}>
          <div className={styles.boton1} ><Botongen texto={"Comprar Ya!"}/></div>
        </Link>
      </main>
    </div>
    );
  }