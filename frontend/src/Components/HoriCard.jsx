import { MovieCard } from "./MovieCard";
import { Card } from "./Card";
import discotecas from "../discotecas.json";
import styles from "./HoriCard.module.css";
import { Listado } from "../Pages/Listado";
import { Calendario } from "../Pages/Calendario";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "react-fetch-hook"


export function HoriCard() {
  
  const url = "https://85.85.68.198:8000/api/discotecas/"
  const {data} = useFetch(url);

  
  return (
    <ul className={styles.moviesGrid}>
    {data?.map((data) => (
        <Link to="/lista-" component={Listado} state={{discoteca: data.nombre, dia:false, mes:false, ciudad: "Bilbao"}} discoteca={data.nombre} dia={false} mes={false} className={styles.nolink}>
          <Card nombre={data.nombre} foto={data.foto} />
        </Link>
    ))}
    </ul>
  );
}
