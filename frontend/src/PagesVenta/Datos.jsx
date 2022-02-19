import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Datos.module.css";
import App from "../App"
import { Botongen } from "../Components/Boton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext, useContext } from "react";


export function DatosVenta() {
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
            "titulo": data.titulo,
            "discoteca": data.discoteca,
            "dia": data.dia,
            "mes": data.mes,
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
        <form onSubmit={(e) => submit(e)}>
          <div className={styles.center}>
          <div>
            <input onChange={(e) => handle(e)} id="titulo" value={data.titulo} type="text" name="titulo" placeholder="Titulo"/>
          </div>
          <div>
            <input onChange={(e) => handle(e)} id="discoteca" value={data.discoteca} type="text" name="discoteca" placeholder="Discoteca"/>
          </div>
          <div>
            <input onChange={(e) => handle(e)} id="dia" value={data.dia} type="text" name="dia" placeholder="Día (numeros)"/>
          </div>
          <div>
            <input onChange={(e) => handle(e)} id="mes" value={data.mes} type="text" name="mes" placeholder="Mes (letras)"/>
          </div>
          <div>
            <input onChange={(e) => handle(e)} id="precio" value={data.precio} type="number" min="0" name="precio" placeholder="Precio"/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>     
          </div>
          
        </form>
      </main>
    </div>
    );
  }