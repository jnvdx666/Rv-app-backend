import { MovieCard } from "./MovieCard";
import { Entrada } from "./Entrada";
import discotecas from "../discotecas.json";
import styles from "./ListaEntradas.module.css";
import { Calendario } from "../Pages/Calendario";
import { PreCheckout} from "../Pages/PreCheckout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useFetch from "react-fetch-hook"

export function ListaEntradas({discoteca , dia , mes}) {
  const url = "http://127.0.0.1:8000/api/addticket/"
  const {data} = useFetch(url);


  return (
    <main>
      {data?.map((data) => (
          <Link to="/pre-checkout" component={PreCheckout} className={styles.nolink}>
          <Entrada img="https://www.bilbaoclick.com/wp-content/uploads/2017/01/moma-discotecas-bilbao.jpg" discoteca={data.discoteca} dia={data.dia} mes={data.mes} precio={data.precio} />
        </Link>
      ))}         
    </main>
  );
}