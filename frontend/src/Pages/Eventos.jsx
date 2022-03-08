import styles from "./Eventos.module.css";
import { Botongen } from "../Components/Boton";
import copa1 from "./1copa.svg";
import { Checkout } from "./Checkout"
import {Listado} from "./Listado"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


export function Eventos() {
    
  
    const location = useLocation()
    const { datos } = location.state
    
    return(
        <div>
      <header>
      </header>
      <main>
          <h1 className={styles.text12}>Eventos destacados de la semana que viene</h1>
        <div className={styles.div1}>
          <img className={styles.img1} src="https://bizkaiaarena.bilbaoexhibitioncentre.com/wp-content/uploads/sites/34/2021/11/ctangana-bizkaia-1.jpg" alt="" />
        </div>
        <h2 className={styles.text11}>Haz click para ver disponibilidad</h2>
        <Link to="/lista-" component={Listado} state={{data: datos}} className={styles.nolink}>
          <div className={styles.boton1} ><Botongen texto={"Compra tus entradas"}/></div>
        </Link>
      </main>
    </div>
    );
  }