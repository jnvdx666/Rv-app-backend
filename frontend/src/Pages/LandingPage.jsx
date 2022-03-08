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
import {Hub} from "aws-amplify";
import awsExports from "../aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { Discotecas, Addticket } from '../models';


Amplify.configure(awsExports);

export function LandingPage() {

      // const listener = Hub.listen("datastore", async hubData => {
      //   const  { event, data } = hubData.payload;
      //   if (event === "ready") {
      //     // do something here once the data is synced from the cloud
          
      //   }
      // })
      
      // Remove listener
      // listener();

      ReactGA.pageview(window.location.pathname);
 
      const [data, setData] = useState([])
      const [dataTickets, setDatatickets] = useState([])

      const fetchDiscotecas1 =  Hub.listen("datastore", async hubData => {
        const  { event, data } = hubData.payload;
        if (event === "ready") {
          // do something here once the data is synced from the cloud
          try {
                const discotecasData = await DataStore.query(Discotecas);
                console.log(discotecasData)
                setData(discotecasData)
              } catch (err) {
                console.log('error fetching') }
        }
      })

      const fetchTickets1 =  Hub.listen("datastore", async hubData => {
        const  { event, data } = hubData.payload;
        if (event === "ready") {
          // do something here once the data is synced from the cloud
          try {
            const ticketsData = await DataStore.query(Addticket);
            console.log(ticketsData)
            setDatatickets(ticketsData)
          } catch (err) {
            console.log('error fetching') }
          }  
      })



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
          fetchDiscotecas1()
          fetchTickets1()
        }, [])

        useEffect(() => {
          fetchDiscotecas()
          fetchTickets()
        }, [])

      if (data.length > 0) {
        var dato = data
        console.log("aws correcto")
      }

      if (data.length == 0) {
        var dato = "Error"
        console.log("aws incorrecto")
      }

    return(
        <div>
      <main>
        <div><img className={styles.logorv}  src={image} alt="" /></div>
        <h3 className={styles.fina}>LAS MEJORES ENTRADAS A LAS MEJORES DISCOTECAS</h3>
        <li className={styles.grid}>
        <Link to="/dnd-salir" component={DondeSalir} state={{datos: dataTickets}} className={styles.nolink}>
          <Botongen texto={"¡Compralas ya!"}/>
        </Link>

        <Link to="/dnd-salir-venta" component={DondeSalirVenta} className={styles.nolink}>
          <Botongen texto={"¡Vendelas ya!"}/> 
        </Link>
        
        </li>
        <h3 className={styles.tit4}>Discotecas Recomendadas</h3>
        <HoriCard data={data} className={styles.horicard} />
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