import { MoviesGrid } from "./Components/MoviesGrid";
import styles from "./Components/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { DondeSalir } from "./Pages/DondSalir";
import { Calendario } from "./Pages/Calendario";
import { Discoteca } from "./Pages/Discoteca";
import { Listado } from "./Pages/Listado";
import { PreCheckout } from "./Pages/PreCheckout";
import { Checkout } from "./Pages/Checkout";
import {CreditCard} from "./Pages/CreditCard";
import {Final} from "./Pages/Final";
import {Eventos} from "./Pages/Eventos";
import { EscQR } from "./Pages/EscQR";
import { QRvista } from "./Pages/QRvista";
import { DondeSalirVenta } from "./PagesVenta/DondSalir";
import { CalendarioVenta } from "./PagesVenta/Calendario";
import { DiscotecaVenta } from "./PagesVenta/Discoteca";
import { PreCheckoutVenta } from "./PagesVenta/PreCheckout";
import {CreditCardVenta} from "./PagesVenta/CreditCard";
import {FinalVenta} from "./PagesVenta/Final";
import {DatosVenta} from "./PagesVenta/Datos";
import { useState } from "react";
import home from "./home1.svg";
import ReactGA from 'react-ga';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import Analytics from '@aws-amplify/analytics';



Amplify.configure(awsExports);
DataStore.start();

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: '53e2c5bad49c4b52b5118cc081769400',
        // Amazon service region
        region: 'us-east-1',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)

Analytics.autoTrack('session', {
    enable: true,
    attributes: {
        attr: 'attr'
    },
});

Analytics.autoTrack('pageView', {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    eventName: 'pageView',
    // OPTIONAL, by default is 'multiPageApp'
    // you need to change it to 'SPA' if your app is a single-page app like React
    type: 'SPA',
    getUrl: () => {
        return window.location.origin + window.location.pathname;
    }
});

export function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  ReactGA.initialize('G-CSN27MJY59');
  return (
    <Router>
      <header>
        <Link to="/" component={LandingPage} className={styles.nolink}>
          <img className={styles.img1} src={home} alt="" />
        </Link>    
      </header>
      <main>
      <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/dnd-salir" element={<DondeSalir />}/>
          <Route exact path="/cal" element={<Calendario />}/>
          <Route exact path="/discotecas" element={<Discoteca />}/>
          <Route exact path="/lista-" element={<Listado />}/>
          <Route exact path="/pre-checkout-:productId" element={<PreCheckout />}/>
          <Route exact path="/checkout" element={<Checkout />}/>
          <Route exact path="/credit-card" element={<CreditCard />}/>
          <Route exact path="/eventos" element={<Eventos />}/>
          <Route exact path="/gracias" element={<Final />}/>
          <Route exact path="/escQR" element={<EscQR />}/>
          <Route exact path="/mostrarQR" element={<QRvista />}/>
          <Route exact path="/dnd-salir-venta" element={<DondeSalirVenta />}/>
          <Route exact path="/cal-venta" element={<CalendarioVenta />}/>
          <Route exact path="/discotecas-venta" element={<DiscotecaVenta />}/>
          <Route exact path="/pre-checkout-venta" element={<PreCheckoutVenta />}/>
          <Route exact path="/credit-card-venta" element={<CreditCardVenta />}/>
          <Route exact path="/gracias-venta" element={<FinalVenta />}/>
          <Route exact path="/datos-venta" element={<DatosVenta />}/>
      </Routes>
      </main>
      <footer className={styles.footer1}>POWERED BY <span className={styles.colorthanic}>THANIC®</span></footer>
    </Router>
  );
}