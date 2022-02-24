import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Final.module.css";
import { Botongen } from "../Components/Boton";
import donut from "./donut.svg";
import { Checkout } from "./Checkout"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { QrReader } from 'react-qr-reader';



export function Final() {

    const url = "https://85.85.68.198:8000/api/addticket/"
    const [dataqr, setData] = useState('No result');


    const location = useLocation()
    const { data } = location.state

    const url_id = url + data.id + '/'

    fetch(url_id,
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify({
      titulo: data.titulo,
      discoteca: data.discoteca,
      dia: data.dia,
      mes: data.mes,
      ciudad: data.ciudad,
      precio: data.precio,
      instagram: data.instagram,
      n_tel_vend: data.n_tel_vend,
      estado: true,
    })
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })

    var newStr = ""

    if (data.instagram.charAt(0) == '@') {
      const str = data.instagram
      newStr = str.slice(1)
    }

    if (data.instagram.charAt(0) != '@') {
      const str = data.instagram
      newStr = str
    }



    const url_instagram = "https://www.instagram.com/" + newStr

    return(
        <div>
      <header>
      </header>
      <main>
        <h1 className={styles.text11}>¡Muchas gracias! </h1>
        <h1 className={styles.text11}>¡No tardes en ponerte en contacto con tu vendedor!</h1>
        <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{dataqr}</p>
        {/* <div className={styles.divimg2}><img className={styles.img2} src={donut} alt="" /></div> */}
        <h3 className={styles.new1}>Este es el instagram de tu vendedor:</h3>
        <a href={url_instagram} target="_blank" className={styles.nolink}><div className={styles.boton1}><Botongen texto={data.instagram}/></div></a>
      </main>
    </div>
    );
  }