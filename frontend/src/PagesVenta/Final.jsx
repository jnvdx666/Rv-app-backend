import styles from "./Final.module.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { DataStore } from '@aws-amplify/datastore';
 import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { Addticket } from '../models';
import CryptoJS from "crypto-js";



export function FinalVenta() {
    

    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify("thanic"), '12345').toString()
    console.log(ciphertext)
    var escaneo = "U2FsdGVkX19qFQob23sFMLNicUAcbvduAqkN3d7HVqA="
    var bytes  = CryptoJS.AES.decrypt(escaneo.toString(), '12345');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log(plaintext.replace(/['"]+/g, ''))
    
    const location = useLocation()
    const {         
    titulo,
    discoteca,
    dia,
    mes,
    ciudad,
    precio,
    instagram,
    n_tel_vend,
    estado } = location.state

    const Post = DataStore.save(
      new Addticket({
        "titulo": titulo,
        "discoteca": discoteca,
        "ciudad": ciudad,
        "dia": dia,
        "mes": mes,
        "precio": parseFloat(precio),
        "instagram": instagram,
        "n_tel_comp": "9999999999",
        "n_tel_vend": n_tel_vend,
        "estado": false
      })
    );


    return(
        <div>
      <header>
      </header>
      <main>
        <h1 className={styles.text11}>¡Muchas gracias! </h1>
        <h2 className={styles.text11}>Tienes que mostrarle este QR a tu comprador para finalizar la transacción</h2>
        <div className={styles.img1}>
        <QRCode value={ciphertext} size={300} fgColor="#000000" bgColor="#fff" level="H" className={styles.codigo}/>
        </div>
      </main>
    </div>
    );
  }