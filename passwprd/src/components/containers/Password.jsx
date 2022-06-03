import React, {useState} from 'react'
import ClassPassword from '../../module/Password';
import Correcion from './Correcion'

export default function Password() {

    const [password, setPassword] = useState("");
    const [error, setError] = useState({
      errorCarrEsp: true,
      errorConse: true,
      errorLong: true,
      errorMayMin: true,
      errorNumMin: true,
      errorNumsConat: true,
      errorSinCero: true,
      errorSinEspacio: true
    });
    const classPass = new ClassPassword("");

    const validatePassword = (e)=>{
        const pass = e.target.value;
        setError(classPass.passMaxSeguridad(pass));
        setPassword(pass);
    }

    



  return (
    <div>
        <input name="password" value={password} placeholder="password" type="password" onChange={validatePassword}/>
        <input type="submit" onSubmit={validatePassword} />
        <Correcion error={error} />
    </div>
  )
}
