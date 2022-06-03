import React from 'react'
import style from "../../css/Correcion.module.css";
export default function Correcion({error}) {
  return (
    <div>
      <p className= {error.errorLong ? style.error : style.bien} >La contraseña tiene que tener 16 caracteres</p>
      <p className= {error.errorMayMin ? style.error : style.bien} >La contraseña tiene que tener mayuscualas y minisculas</p>
      <p className= {error.errorConse ? style.error : style.bien} >La constraseña no puede tener letras consecutivas</p>
      <p className= {error.errorNumMin ? style.error : style.bien} >La contraseña tiene que tener un minimo de 4 numeros</p>
      <p className= {error.errorNumsConat ? style.error : style.bien} >La contraseña no puede tener numeros concatenados</p>
      <p className= {error.errorCarrEsp ? style.error : style.bien} >Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.</p>
      <p className= {error.errorSinCero ? style.error : style.bien} >No se puede usar el número 0.</p>
      <p className= {error.errorSinEspacio ? style.error : style.bien} >No se puede colocar espacios.</p>
    </div>
  )
}
