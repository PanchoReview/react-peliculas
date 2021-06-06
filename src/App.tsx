import PeliculaIndividual from "./Components/Peliculas/PeliculaIndividual";
import { Pelicula } from "./Components/Peliculas/Peliculas.model";

function App() {

const peliculaPrueba: Pelicula = {
  id: 1, 
  titulo: "SpiderMan: Far From Home", 
  poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
}

  return (
    <>
    <PeliculaIndividual pelicula={peliculaPrueba} />
    </>
  )
}

export default App;
