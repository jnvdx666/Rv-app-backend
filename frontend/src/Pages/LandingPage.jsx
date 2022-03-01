import { MoviesGrid } from "../Components/MoviesGrid";
import { MovieCard } from "../Components/MovieCard";
import { HoriCard } from "../Components/HoriCard";
import styles from "./LandingPage.module.css";
import { Botongen } from "../Components/Boton"
import { DondeSalirVenta } from "../PagesVenta/DondSalir";
import { DondeSalir } from "./DondSalir";
import { EscQR } from "./EscQR";
import { QRvista } from "./QRvista";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import image from "./logorv.svg";
import { useEffect } from "react";
import { useState } from "react";
import { match } from "react";
import useFetch from "react-fetch-hook"
import ReactGA from 'react-ga';
import Amplify from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);






export function LandingPage() {

    ReactGA.pageview(window.location.pathname);
    
    const url = "https://85.85.68.198:8000/api/addticket/"
    const {data} = useFetch(url);

    // useEffect (() => {
    //   API.get()
    // }, [])

    return(
        <div>
      <main>
        <div><img className={styles.logorv}  src={image} alt="" /></div>
        <h3 className={styles.fina}>LAS MEJORES ENTRADAS A LAS MEJORES DISCOTECAS</h3>
        <li className={styles.grid}>
        <Link to="/dnd-salir" component={DondeSalir} state={{datos: data}} className={styles.nolink}>
          <Botongen texto={"¡Compralas ya!"}/>
        </Link>

        <Link to="/dnd-salir-venta" component={DondeSalirVenta} className={styles.nolink}>
          <Botongen texto={"¡Vendelas ya!"}/> 
        </Link>
        
        </li>
        <h3 className={styles.tit4}>Entradas Recomendadas</h3>
        <HoriCard className={styles.horicard} />
        <li className={styles.grid2}>
  
        {/* <Link to="/escQR" component={EscQR} className={styles.nolink}>
          <Botongen texto={"Escanear QR"}/>
        </Link>

        <Link to="/mostrarQR" component={QRvista} className={styles.nolink}>
          <Botongen texto={"Mostrar QR"} />
        </Link> */}
        
         </li>
      </main>
    </div>
    );
  }