import { MovieCard } from "./MovieCard";
import { Entrada } from "./Entrada";
import discotecas from "../discotecas.json";
import styles from "./ListaEntradas.module.css";
import { Calendario } from "../Pages/Calendario";
import { PreCheckout} from "../Pages/PreCheckout";
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import useFetch from "react-fetch-hook"
import React,{useState, useEffect} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Discotecas, Addticket } from '../models';

export function ListaEntradas() {

  const location = useLocation()
  const { dia, mes, ciudad, discoteca } = location.state

  const [data, setData] = useState([])
  const [dataTickets, setDatatickets] = useState([])

  const fetchDiscotecas = async () => {
    try {
      const discotecasData = await DataStore.query(Discotecas);
      console.log(discotecasData)
      setData(discotecasData)
    } catch (err) {
      console.log('error fetching') }
    }

  const fetchTickets = async () => {
    try {
      const ticketsData = await DataStore.query(Addticket);
      console.log(ticketsData)
      setDatatickets(ticketsData)
    } catch (err) {
      console.log('error fetching') }
    }

  useEffect(() => {
    fetchDiscotecas()
    fetchTickets()
  }, [])

  if (dia != false && mes != false){
    var newArray = dataTickets.filter(function (el) {
      return el.discoteca == discoteca && el.dia == dia && el.mes == mes && el.estado == false});
  }

  if (dia == false && mes == false){
    var newArray = dataTickets.filter(function (el) {
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