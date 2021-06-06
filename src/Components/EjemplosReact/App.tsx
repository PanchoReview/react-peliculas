import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EjemploReloj from './EjemploReloj';
import Abuelo from './Abuelo';
import ContenidoDinamico from './ContenidoDinamico';
import EjemploUseEffect from './EjemploUseEffect';
import ErrorBoundary from './ErrorBoundary';
import FormularioTexto from './FormularioTexto';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido2 from './ProyectarContenido2';
import ValorContext from './ValorContext';

function App() {
  const [texto, setTexto] = useState("")
  const [checked, setChecked] = useState(true)

  const imageUrl = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg"
  const manejarClick = () => console.log("click")
  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput)
    setTexto(textoInput)
  }

  const parteIntermedia = <EjemploReloj />

  const estilo = {
    backgroundColor: "red", width: "50px", height: "50px", marginLeft: "1rem"
  }

  const parteInferior = <div style={estilo}></div>
  const calificaciones = [
    { nombre: "Felipe", calificacion: 75 },
    { nombre: "Claudia", calificacion: 85 },
    { nombre: "Roberto", calificacion: 95 },
    { nombre: "Daniel", calificacion: -1 },
  ]

  return (
    <div>
      <h1 className="rojo">Hola mundo</h1>

      <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      <div>
        <input type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked} /> Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null}

      {calificaciones.map(cal => 
      <ErrorBoundary key={cal.nombre} errorUI={<h3>Error mostrando la calificación</h3>}>
        <ContenidoDinamico {...cal} />
      </ErrorBoundary>
        
        )}

      {/* <ProyectarContenido>
        <>
          <span>Hola, proyectando contenido</span>          
        </>
      </ProyectarContenido> */}

      <ProyectarContenido2 
        parteSuperior={<h3>Esta es la parte de arriba</h3>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      />

      <button onClick={manejarClick}
        onMouseEnter={() => console.log("mouse enter")}>Click me!</button>

      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />

      <MostrarTexto texto={texto} />


      
    </div>
  )
}

export default App;
