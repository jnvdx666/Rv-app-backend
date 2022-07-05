import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Ordenador.module.css";
import { Botongen } from "../Components/Boton";
import { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "./logorv.svg";
import fondo from "./new.png";
import julio from "./FotosCal/juliopc.jpg";
import agosto from "./FotosCal/agostopc.jpg";
import septiembre from "./FotosCal/septiembrepc.jpg";
import octubre from "./FotosCal/octubrepc.jpg";

// style={{ backgroundImage: `url(${fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}

export function Ordenador() {
  return (
    <div>
      <img className={styles.img2} src={julio} alt="" />
      <img className={styles.img2} src={agosto} alt="" />
      <img className={styles.img2} src={septiembre} alt="" />
      <img className={styles.img2} src={octubre} alt="" />
    </div>
  );
}
