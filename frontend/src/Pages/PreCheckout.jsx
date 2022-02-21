import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./PreCheckout.module.css";
import { Botongen } from "../Components/Boton";
import copa1 from "./1copa.svg";
import { Checkout } from "./Checkout"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


export function PreCheckout() {
    
    const location = useLocation()
    const { datos } = location.state
    
    return(
        <div>
      <header>
      </header>
      <main>
        <div className={styles.div1}>
          <img className={styles.img1} src="https://dediscoteca.com/wp-content/uploads/2020/01/76779546_2467175953536251_7713894811329101824_o.jpg" alt="" />
        </div>
        <h1 className={styles.text11}>{datos.titulo}</h1>
        <div className={styles.divimg2}><img className={styles.img2} src={copa1} alt="" /></div>
        <Link to="/checkout" component={Checkout} state={{data: datos}} className={styles.nolink}>
          <div className={styles.boton1} ><Botongen texto={"Comprar Ya!"}/></div>
        </Link>
      </main>
    </div>
    );
  }