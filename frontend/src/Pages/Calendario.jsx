import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Calendario.module.css";
import { Botongen } from "../Components/Boton"
import { Discoteca } from "./Discoteca";
import './Calendar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


export function Calendario() {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const [value, setDate] = useState(new Date());
    const onChange = value => {setDate(value);}
    var mesletra = value.toLocaleString("es", { month: "long" });
    mesletra = capitalizeFirstLetter(mesletra)

    const OurFallbackComponent = ({ error}) => {
      return (
        <div>
          <h1>An error occurred: {error.message}</h1>
        </div>
      );
    };

    return (
        <div>
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>
        <header>
          <h2 className={styles.tit4}>¿Qué día?</h2>
        </header>
        <main>
        <div className={styles.div1}>
        <Calendar onChange={onChange} value={value} minDate={new Date()} maxDate={new Date(2022, 3, 30)}/>
      </div>
      <div className={styles.botons}>
        <Link to="/discotecas"  component={Discoteca} state={{dia: (value.getDate()).toString() , mes: mesletra, ciudad: "Bilbao"}} className={styles.nolink}>
          <Botongen texto={"Siguiente"} />
        </Link>
      </div>
        
        </main>
        </ErrorBoundary>
      </div>
      );
  }
