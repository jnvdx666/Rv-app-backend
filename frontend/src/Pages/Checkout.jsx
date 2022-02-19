import React, { useCallback } from "react";
import { ApplePayButton } from "react-apple-pay-button";
import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Checkout.module.css";
import { Botongen } from "../Components/Boton";
import {CreditCard} from "./CreditCard";
import copa1 from "./1copa.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import minus from "./minus.svg";
import plus from "./plus.svg";
import appay from "./ap-pay.svg";
import gpay from "./g-pay.svg";

export function Checkout() {
    const onRequestApplePay = useCallback(() => /* TODO */ []);
    return(
        <div>
      <header>
      </header>
      <main>
        <div className={styles.grid}>
          <div className={styles.divfoto}>
            <img className={styles.foto1} src="https://lh5.googleusercontent.com/p/AF1QipMQyHP8poRIAkHSksaCFHoT4wD7dhOzfRujRfU_" alt="" />
          </div>
          <div className={styles.divtexto}>
            <h3 className={styles.tex2}>Entrada Moma 24 de Febrero </h3>
            <div className={styles.grid3}>
              <div className={styles.divfoto}>
                <div className={styles.grid3}>
                    <div className={styles.divfoto}>
                      <img className={styles.centrar} src={minus} alt="" />
                    </div>
                    <div className={styles.divtexto}>
                      <h3 className={styles.tex3}>01</h3>
                    </div>
                    <div className={styles.divtexto2}>
                      <img className={styles.centrar}  src={plus} alt="" />
                    </div>
                </div>
              </div>
              <div className={styles.divtexto}>
                <h3 className={styles.texprecio}>15€</h3>
              </div>

            </div>
          </div>

        </div>
        <div className={styles.boton2}>
          <Botongen texto={"Codigo de Promoción"} />
        </div>
        <div className={styles.grid3}>
          <div className={styles.divfoto}> 
            <h3 className={styles.tex4}>Entrada:</h3>
          </div>
          <div className={styles.divtexto}> 
            <h3 className={styles.tex5}>15€</h3>
          </div>
        </div>

        <div className={styles.grid3}>
          <div className={styles.divfoto}> 
            <h3 className={styles.tex4}>Comisión:</h3>
          </div>
          <div className={styles.divtexto}> 
            <h3 className={styles.tex5}>0,35€</h3>
          </div> 
        </div>

        <div className={styles.grid3}>
          <div className={styles.divfoto}> 
            <h3 className={styles.tex4}>Total:</h3>
          </div>
          <div className={styles.divtexto}> 
            <h3 className={styles.tex5}>15,35€</h3>
          </div> 
        </div>

        <Link to="/credit-card" component={CreditCard} className={styles.nolink}>
          <div className={styles.boton3}>
            <Botongen texto={"Pago con tarjeta"} />
          </div>
        </Link>

        <div className={styles.apple}>
          <img className={styles.appay} className={styles.centrar2} src={appay} alt="" />
        </div>
        <div className={styles.apple}>
          <img className={styles.appay} className={styles.centrar2} src={gpay} alt="" />
        </div>
      </main>
    </div>
    );
  }