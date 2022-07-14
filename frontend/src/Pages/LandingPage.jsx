import { MoviesGrid } from "../Components/MoviesGrid";
import { MovieCard } from "../Components/MovieCard";
import { HoriCard } from "../Components/HoriCard";
import styles from "./LandingPage.module.css";
import { Botongen } from "../Components/Boton";
import { DondeSalirVenta } from "../PagesVenta/DondSalir";
import { DondeSalir } from "./DondSalir";
import { EscQR } from "./EscQR";
import { QRvista } from "./QRvista";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import image from "./logorv.svg";
import { useEffect } from "react";
import { useState } from "react";
import { match } from "react";
import useFetch from "react-fetch-hook";
import ReactGA from "react-ga";
import Amplify from "aws-amplify";
import { Hub } from "aws-amplify";
import awsExports from "../aws-exports";
import { DataStore } from "@aws-amplify/datastore";
import { Discotecas, Addticket } from "../models";
import jul1 from "./FotosCal/juliom.jpg"
import jul2 from "./FotosCal/juliom2.jpg"
import ago1 from "./FotosCal/agostom.jpg"
import ago2 from "./FotosCal/agosto2m.jpg"
import sep1 from "./FotosCal/septiembrem.jpg"
import sep2 from "./FotosCal/septiembre2m.jpg"
import oct1 from "./FotosCal/octubrem.jpg"
import oct2 from "./FotosCal/octubre2m.jpg"

Amplify.configure(awsExports);

export function LandingPage() {
  return (
    <div>
      <main>
        <img className={styles.img1} src={jul1} alt="" />
        <img className={styles.img1} src={jul2} alt="" />
        <img className={styles.img1} src={ago1} alt="" />
        <img className={styles.img1} src={ago2} alt="" />
        <img className={styles.img1} src={sep1} alt="" />
        <img className={styles.img1} src={sep2} alt="" />
        <img className={styles.img1} src={oct1} alt="" />
        <img className={styles.img1} src={oct2} alt="" />
      </main>
    </div>
  );
}
