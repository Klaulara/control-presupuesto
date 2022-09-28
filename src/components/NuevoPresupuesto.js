import {useState} from 'react'
import { Mensaje } from './Mensaje'

export const NuevoPresupuesto = ({ 
    presupuesto, 
    setPresupuesto,  
    setIsValidPresupuesto 
}) => {
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('No es un presupuesto valido')
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='text'  // podemos cambiar este type a nnumber y nos olvidamos de verificar las letras
                    placeholder='Añade tu Presupuesto'
                    value={presupuesto}
                    onChange={(e)=> setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type='submit' value='Añadir' />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}
