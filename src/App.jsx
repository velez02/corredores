import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder='Añade tu nombre (sin apellidos)' />
          </div>
          <div>
            <label htmlFor="last-name">Apellidos</label>
            <input id="last-name" type="text" placeholder='Añade tus apellidos' />
          </div>
          <div>
            <label htmlFor="age">Edad</label>
            <input id="age" type="number" placeholder='Añade tu edad' />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" placeholder='tu@ejemplo.com' />
          </div>
          <div>
            <label htmlFor="description">Motivo de la comsulta</label>
            <textarea id="description" placeholder='Describe el problema' />
          </div>
          <div>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
