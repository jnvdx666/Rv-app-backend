import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Ordenador.module.css";
import { Botongen } from "../Components/Boton"
import { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import logo from "./logorv.svg"
import fondo from "./new.png"

// style={{ backgroundImage: `url(${fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}

export function Ordenador() {

    return(
        <div>
            <h1 className={styles.text1}>Ups. Todavia no tenemos la versión web disponible. Puedes probarla en el movil si quieres :)</h1>
            <img className={styles.img1} src={logo} alt="" />
            <h1 className={styles.text1}>Oops. We don't have the web version available yet. You can try it on your mobile if you want :)</h1>
        </div>
    );
  }