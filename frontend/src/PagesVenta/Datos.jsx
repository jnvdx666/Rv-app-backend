import { MoviesGrid } from "../Components/MoviesGrid";
import styles from "./Datos.module.css";
import App from "../App"
import { Botongen } from "../Components/Boton";
import { CreditCardVenta } from "./CreditCard";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";





export function DatosVenta() {
  
    let titulo1 = ""
    
    const { register, handleSubmit, watch, errors } = useForm();
    const location = useLocation()
    const { diat, mest, ciudadt, discoteca } = location.state

    const navigate = useNavigate();


    const url = "http://85.85.68.198:8000/api/addticket/"
    const [data , setData] = useState({
      titulo: "",
      discoteca: "",
      dia: "",
      mes: "",
      precio: "",
      instagram: "",
      n_tel_vend: "",
      estado: false,
    })


    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData) 
        console.log(newData)
    }

    

    function submit(e) {
        e.preventDefault();

        navigate('/credit-card-venta', {state:{
        titulo: titulo1, 
        discoteca:discoteca,
        dia: diat,
        mes: mest,
        ciudad: ciudadt,
        precio: data.precio,
        instagram: data.instagram,
        n_tel_vend: data.n_tel_vend,
        estado: false}});
    }  

    console.log(discoteca)

    if (discoteca != "Otros") {
      titulo1 = "Entrada" + " " + discoteca + " " + diat + " " + "de" + " " + mest
      return(
        <div>
      <header>
      </header>
      <main>
        
        <div className={styles.div1}>
          <img className={styles.img1} src="https://lh5.googleusercontent.com/p/AF1QipMQyHP8poRIAkHSksaCFHoT4wD7dhOzfRujRfU_" alt="" />
        </div>
        <h1 className={styles.text11}>Entrada {discoteca} {diat}  {mest}</h1>
        <form onSubmit={(e) => submit(e)}>
          <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="precio" value={data.precio} type="number" min="0" name="precio" pattern="\d*" placeholder="Precio" required />
          </div>
          <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="instagram" value={data.instagram} type="text" name="instagram" placeholder="@tu_instagram" required/>
          </div>
          <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="n_tel_vend" value={data.n_tel_vend} type="n_tel_vend" name="n_tel_vend" pattern="\d*" placeholder="Nº de Telefono" required/>
          </div>
          <div className={styles.center}>
              <button className={styles.botonsubmit}  type="submit">Siguiente</button>
            
          </div>  
        </form>

      </main>
    </div>
    );
    }

    if (discoteca == "Otros") {
      titulo1 = data.titulo
      return(
        <div>
      <header>
      </header>
      <main>
        <div className={styles.div1}>
          <img className={styles.img1} src="https://lh5.googleusercontent.com/p/AF1QipMQyHP8poRIAkHSksaCFHoT4wD7dhOzfRujRfU_" alt="" />
        </div>
        <h1 className={styles.text11}>{data.titulo} {diat} de {mest}</h1>
        <form onSubmit={(e) => submit(e)}>
        <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="titulo" value={data.titulo} type="text" name="titulo" placeholder="Titulo" required />
          </div>
          <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="precio" value={data.precio} type="number" min="0" name="precio" pattern="\d*" placeholder="Precio" required />
          </div>
          <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="instagram" value={data.instagram} type="text" name="instagram" placeholder="@tu_instagram" required/>
          </div>
          <div>
            <input className={styles.input1} onChange={(e) => handle(e)} id="n_tel_vend" value={data.n_tel_vend} type="n_tel_vend" name="n_tel_vend" pattern="\d*" placeholder="Nº de Telefono" required/>
          </div>
          <div className={styles.center}>
              <button className={styles.botonsubmit}  type="submit">Siguiente</button>
            
          </div>  
        </form>

      </main>
    </div>
    );
    }
    
    
  }