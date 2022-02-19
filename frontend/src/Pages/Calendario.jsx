import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Calendario.module.css";
import { Botongen } from "../Components/Boton"
import { Discoteca } from "./Discoteca";
import './Calendar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




export function Calendario() {
    const [value, onChange] = useState(new Date());
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
        <Link to="/discotecas"  component={Discoteca} className={styles.nolink}>
          <Botongen texto={"Siguiente"} />
        </Link>
      </div>
        
        </main>
      </div>
      );
  }
