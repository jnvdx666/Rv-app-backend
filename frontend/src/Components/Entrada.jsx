import { MovieCard } from "./MovieCard";
import { Card } from "./Card";
import discotecas from "../discotecas.json";
import styles from "./Entrada.module.css";
import { Calendario } from "../Pages/Calendario";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function Entrada( {img,  discoteca, dia, mes, precio }) {
  const imgroute = img

  return (
          <main> 
            <div className={styles.grid}>
            <div className={styles.divfoto}>
              <img className={styles.foto1} src={imgroute} alt="" />
          </div>
          <div className={styles.divtexto}>
              <h3 className={styles.tex2}>Entrada { discoteca } {dia} de {mes} </h3>
              <h4>Se vende una entrada para la gala de MOMA + 2 consumiciones+ 1 chupito</h4>
          </div>
          <div className={styles.divprecio}>
          <h1 className={styles.texprecio}>{precio}€</h1>
          </div>
            </div>
          </main>  
  );
}