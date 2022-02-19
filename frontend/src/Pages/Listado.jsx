import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Listado.module.css";
import { ListaEntradas} from "../Components/ListaEntradas";


export function Listado() {
    return(
      <main>
        <h2 className={styles.tit2}>Resultado de tu busqueda</h2>
        <h3 className={styles.tit3}>15 resultados</h3>
        <ListaEntradas discoteca={"Moma"} dia={"24"} mes={"Febrero"} />
      </main>
    );
  }