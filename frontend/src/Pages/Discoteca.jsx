import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Discoteca.module.css";
import { Botongen } from "../Components/Boton"
import { Listado } from "./Listado"
import {Eventos} from "./Eventos"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

export function Discoteca() {

    const location = useLocation()
    const { dia, mes, ciudad } = location.state
    const d = dia.toString()

    return(
        <div>
      <header>
        <h2 className={styles.tit2}>¿A qué discoteca? </h2>
      </header>
      <main>
        <div className={styles.dv1}>
        <Link to="/eventos"  component={Eventos} state={{discoteca:"Otros", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Otros eventos"} /></div>
        </Link>
        <hr className={styles.barra} />
        <Link to="/lista-"  component={Listado} state={{discoteca:"Moma", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Moma"} /></div>
        </Link>
        <Link to="/lista-"  component={Listado} state={{discoteca:"Back", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Back"} /></div>
        </Link>
        <Link to="/lista-"  component={Listado} state={{discoteca:"Stage", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Stage"} /></div>
        </Link>
        <Link to="/lista-"  component={Listado} state={{discoteca:"Budha", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Budha"} /></div>
        </Link>
        <Link to="/lista-"  component={Listado} state={{discoteca:"Flash", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Flash"} /></div>
        </Link>
        <Link to="/lista-"  component={Listado} state={{discoteca:"Sonora", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Sonora"} /></div>
        </Link> 
        <Link to="/lista-"  component={Listado} state={{discoteca:"Rock", dia:dia, mes:mes, ciudad: "Bilbao"}} className={styles.nolink}>
          <div  className={styles.bt1}><Botongen texto={"Rock"} /></div>
        </Link> 
        </div>   
      </main>
    </div>
    );
  }