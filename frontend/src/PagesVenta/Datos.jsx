import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Datos.module.css";
import App from "../App"
import { Botongen } from "../Components/Boton";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, createContext, useContext } from "react";


export function DatosVenta() {

    const location = useLocation()
    const { diat, mest, ciudadt, discoteca } = location.state


    const url = "http://127.0.0.1:8000/api/addticket/"
    const [data , setData] = useState({
      titulo: "",
      discoteca: "",
      dia: "",
      mes: "",
      precio: "",
      estado: false,
    })


    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData) 
        console.log(newData)
    }

    function submit(e) {
        e.preventDefault();
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "titulo": "Entrada" + " " + discoteca + " " + diat + " " + "de" + " " + mest,
            "discoteca":discoteca,
            "dia": diat,
            "mes": mest,
            "ciudad": ciudadt,
            "precio": data.precio,
            "estado": false
          })
        })
    }  
    return(
        <div>
      <header>
      </header>
      <main>
        <h1 className={styles.text11}>Introduce los datos de la entrada</h1>
        <h2>Ciudad: {ciudadt}</h2>
        <h2>Día: {diat}</h2>
        <h2>Mes: {mest}</h2>
        <h2>Discoteca: {discoteca}</h2>
        <form onSubmit={(e) => submit(e)}>
          <div className={styles.center}>
          <div>
            <input onChange={(e) => handle(e)} id="precio" value={data.precio} type="number" min="0" name="precio" placeholder="Precio"/>
          </div>
          <div>
            <button className={styles.botonsubmit} type="submit">Siguiente</button>
          </div>     
          </div>
        </form>
      </main>
    </div>
    );
  }