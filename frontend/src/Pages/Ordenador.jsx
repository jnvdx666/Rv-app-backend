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
import julio from "./FotosCal/julio.jpg";
import julio2 from "./FotosCal/julio2.jpg";
import agosto from "./FotosCal/agosto.jpg";
import agosto2 from "./FotosCal/agosto2.jpg";
import septiembre from "./FotosCal/septiembre.jpg";
import septiembre2 from "./FotosCal/septiembre2.jpg";
import octubre from "./FotosCal/octubre.jpg";
import octubre2 from "./FotosCal/octubre2.jpg";

// style={{ backgroundImage: `url(${fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}

export function Ordenador() {
  return (
    <div>
      <img className={styles.img2} src={julio} alt="" />
      <img className={styles.img2} src={julio2} alt="" />
      <img className={styles.img2} src={agosto} alt="" />
      <img className={styles.img2} src={agosto2} alt="" />
      <img className={styles.img2} src={septiembre} alt="" />
      <img className={styles.img2} src={septiembre2} alt="" />
      <img className={styles.img2} src={octubre} alt="" />
      <img className={styles.img2} src={octubre2} alt="" />
    </div>
  );
}
