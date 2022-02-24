import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Calendario.module.css";
import { Botongen } from "../Components/Boton"
import { DiscotecaVenta } from "./Discoteca";
import './Calendar.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from "react-router-dom";
import ReactGA from 'react-ga';

export function CalendarioVenta() {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const location = useLocation()
    const { ciudad } = location.state
    const [value, setDate] = useState(new Date());
    const onChange = value => {setDate(value);}
    const ciud = {ciudad}
    var mesletra = value.toLocaleString("es", { month: "long" });
    mesletra = capitalizeFirstLetter(mesletra)
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (

        <div>
        <header>
          <h2 className={styles.tit4}>¿Qué día?</h2>
        </header>
        <main>
        <div className={styles.div1}>
        <Calendar onChange={onChange} value={value} minDate={new Date()} maxDate={new Date(2022, 3, 30)}/>
      </div>
      <div className={styles.botons}>
        <Link to="/discotecas-venta"  component={DiscotecaVenta} state={{dia: (value.getDate()).toString() , mes: mesletra, ciudad: "Bilbao"}} className={styles.nolink}>
          <Botongen texto={"Siguiente"} />
        </Link>
      </div>
        </main>
      </div>
      );
  }
