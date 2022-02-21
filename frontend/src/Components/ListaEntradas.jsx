import { MovieCard } from "./MovieCard";
import { Entrada } from "./Entrada";
import discotecas from "../discotecas.json";
import styles from "./ListaEntradas.module.css";
import { Calendario } from "../Pages/Calendario";
import { PreCheckout} from "../Pages/PreCheckout";
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import useFetch from "react-fetch-hook"
import React,{useState, useEffect} from 'react';
import axios from "axios";

export function ListaEntradas() {

  const location = useLocation()
  const { dia, mes, ciudad, discoteca } = location.state

  const url = "http://85.85.68.198:8000/api/addticket/"

  const diat = dia

  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (dia != false && mes != false){
    var newArray = users.filter(function (el) {
      return el.discoteca == discoteca && el.dia == dia && el.mes == mes && el.estado == false});
  }

  if (dia == false && mes == false){
    var newArray = users.filter(function (el) {
      return el.discoteca == discoteca && el.estado == false});
  }


  return (
    <main>
      <h3 className={styles.tit3}>{newArray.length} resultados</h3>
      {newArray?.map((data) => (
          <Link to={"/pre-checkout-" + data.id} component={PreCheckout} state={{datos: data}} className={styles.nolink}>
          <Entrada img="https://www.bilbaoclick.com/wp-content/uploads/2017/01/moma-discotecas-bilbao.jpg" titulo={data.titulo} discoteca={data.discoteca} dia={data.dia} mes={data.mes} precio={data.precio} />
        </Link>
      ))}         
    </main>
  );
}