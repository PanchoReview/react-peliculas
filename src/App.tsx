import React from "react";
import ListadoPeliculas from "./Components/Peliculas/ListadoPeliculas";
import PeliculaIndividual from "./Components/Peliculas/PeliculaIndividual";
import { Pelicula } from "./Components/Peliculas/Peliculas.model";

function App() {
  const peliculasEnCartelera: Pelicula[] = [
    {
      id: 1,
      titulo: "SpiderMan: Far From Home",
      poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      id: 2, 
      titulo: "Moana", 
      poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
  ]

  const peliculasProximosEstrenos: Pelicula[] = [
    {
      id: 3,
      titulo: "Soul",
      poster: "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
  ]


  return (
    <>
     <h3>En cartelera</h3> 
     <ListadoPeliculas peliculas={peliculasEnCartelera} />

     <h3>Próximos estrenos</h3> 
     <ListadoPeliculas peliculas={peliculasProximosEstrenos} />
    </>
  )
}

export default App;
