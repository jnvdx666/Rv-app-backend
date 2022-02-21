import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Discoteca.module.css";
import { Botongen } from "../Components/Boton"
import {DatosVenta} from "./Datos"
import { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


export function DiscotecaVenta() {

    const location = useLocation()
    const { dia, mes, ciudad } = location.state
    const d = dia.toString()


    return(
        <div>
      <header>
        <h2 className={styles.tit2}>¿De qué discoteca?</h2>
      </header>
      <main>
        <div className={styles.dv1}>
        <Link to="/datos-venta"  component={DatosVenta} state={{ diat: dia, mest: mes, ciudadt: ciudad, discoteca: "Moma" }} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Moma"} /></div>
        </Link>
        <Link to="/datos-venta"  component={DatosVenta} state={{ diat: dia, mest: mes, ciudadt: ciudad, discoteca: "Back" }} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Back"} /></div>
        </Link>
        <Link to="/datos-venta"  component={DatosVenta} state={{ diat: dia, mest: mes, ciudadt: ciudad, discoteca: "Stage" }} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Stage"} /></div>
        </Link>
        <Link to="/datos-venta"  component={DatosVenta} state={{ diat: dia, mest: mes, ciudadt: ciudad, discoteca: "Budha" }} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Budha"} /></div>
        </Link>
        <Link to="/datos-venta"  component={DatosVenta} state={{ diat: dia, mest: mes, ciudadt: ciudad, discoteca: "Flash" }} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Flash"} /></div>
        </Link>
        <Link to="/datos-venta"  component={DatosVenta} state={{ diat: dia, mest: mes, ciudadt: ciudad, discoteca: "Sonora" }} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Sonora"} /></div>
        </Link> 
        </div>   
      </main>
    </div>
    );
  }