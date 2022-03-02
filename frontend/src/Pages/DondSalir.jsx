import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "../Components/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
import { API, graphqlOperation } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore';
import { Discotecas } from '../models';
import { useEffect } from "react";
import { useState } from "react";


Amplify.configure(awsExports);
export function DondeSalir() {

  const [data, setData] = useState([])

    
    
  const fetchActors = async () => {
    try {
      const discotecasData = await DataStore.query(Discotecas);
      console.log(discotecasData)
      setData(discotecasData)
    } catch (err) {
      console.log('error fetching actors') }
    }

    useEffect(() => {
      fetchActors()
    }, [])

    if (data.length > 0) {
      var datos = data
      console.log("aws correcto")
    }

    if (data.length == 0) {
      var datos = "Error"
    }

    // const location = useLocation()
    // const { datos } = location.state

    return(
        <div>
      <header>
        <h2 className={styles.tit2}>¿Dónde quieres salir?</h2>
      </header>
      <main>
        <MoviesGrid  enlace="/cal" dir="Calendario" datos={datos} />
      </main>
    </div>
    );
  }