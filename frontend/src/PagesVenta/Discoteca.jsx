import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Discoteca.module.css";
import { Botongen } from "../Components/Boton"
import {DatosVenta} from "./Datos"
import { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function DiscotecaVenta({fecha}) {


    return(
        <div>
      <header>
        <h2 className={styles.tit2}>¿A qué discoteca?</h2>
      </header>
      <main>
        <div className={styles.dv1}>
        <Link to="/datos-venta"  component={DatosVenta} className={styles.nolink}>
          <div className={styles.bt1}><Botongen texto={"Moma"} /></div>
        </Link>
          <div className={styles.bt1}><Botongen texto={"Back"} /></div>
          <div className={styles.bt1}><Botongen texto={"Stage"} /></div>
          <div className={styles.bt1}><Botongen texto={"Budha"} /></div>
          <div className={styles.bt1}><Botongen texto={"Flash"} /></div>
          <div className={styles.bt1}><Botongen texto={"Sonora"} /></div>
        </div>

      </main>
    </div>
    );
  }