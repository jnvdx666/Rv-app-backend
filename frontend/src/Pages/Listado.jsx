import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Listado.module.css";
import { ListaEntradas} from "../Components/ListaEntradas";
import useFetch from "react-fetch-hook"


export function Listado({ discoteca, dia, mes }) {
    return(
      <main>
        <h2 className={styles.tit2}>Resultado de tu busqueda</h2>
        
        <ListaEntradas discoteca={discoteca} dia={dia} mes={mes} />
      </main>
    );
  }