import styles from "./Final.module.css";
import { Botongen } from "../Components/Boton";
import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { QrReader } from 'react-qr-reader';
// import { DataStore } from '@aws-amplify/datastore';
// import { Addticket } from '../models';
import CryptoJS from "crypto-js";


export function Final() {


    const url = ""
    const [dataqr, setData] = useState('No result');
    const [datavalid, setValid] = useState('No valido')

    const location = useLocation()
    const { data } = location.state

    const url_id = url + data.id + '/'

    console.log(data.id)

    // const fetchTickets = async () => {
    //   try {
    //     const original = await DataStore.query(Addticket, data.id);
    //     console.log(original)
    //     const modified = await DataStore.save(
    //       Addticket.copyOf(original, updated => {
    //         updated.estado = true;
    //       })
    //     )
    //     console.log(modified)
    //   } catch (err) {
    //     console.log('error fetching') }
    //   }
    
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
        {/* <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            var bytes  = CryptoJS.AES.decrypt(result?.text.toString(), '12345');
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);
            var resultado = plaintext.replace(/['"]+/g, '')
            console.log(plaintext.replace(/['"]+/g, ''))
            if(resultado == 'thanic') {
              setValid("Transacción exitosa")
              fetchTickets()
            }
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
        constraints={{
          facingMode: "environment"
      }}
      /> */}
      <p>{datavalid}</p>
        {/* <div className={styles.divimg2}><img className={styles.img2} src={donut} alt="" /></div> */}
        <h3 className={styles.new1}>Este es el instagram de tu vendedor:</h3>
        <a href={url_instagram} target="_blank" className={styles.nolink}><div className={styles.boton1}><Botongen texto={data.instagram}/></div></a>
      </main>
    </div>
    );
  }