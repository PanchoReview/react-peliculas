import CrearGenero from "./Components/Generos/CrearGenero"
import EditarGenero from "./Components/Generos/EditarGenero"
import IndiceGeneros from "./Components/Generos/IndiceGeneros"
import LandingPage from "./Components/LandingPage"
import IndiceActores from "./Components/Actores/IndiceActores"
import CrearActores from "./Components/Actores/CrearActores"
import EditarActores from "./Components/Actores/EditarActores"
import IndiceCines from "./Components/Cines/IndiceCInes"
import CrearCine from "./Components/Cines/CrearCine"
import EditarCine from "./Components/Cines/EditarCine"
import CrearPelicula from "./Components/Peliculas/CrearPelicula"
import EditarPelicula from "./Components/Peliculas/EditarPelicula"
import FiltroPeliculas from "./Components/Peliculas/FiltroPeliculas"
import RedireccionarLanding from "./Components/Utils/RedireccionarLanding"

const rutas = [    
    {path: "/generos", componente: IndiceGeneros, exact: true},    
    {path: "/generos/crear", componente: CrearGenero},    
    {path: "/generos/editar/:id(\\d+)", componente: EditarGenero},    

    {path: "/actores", componente: IndiceActores, exact: true},    
    {path: "/actores/crear", componente: CrearActores},    
    {path: "/actores/editar/:id(\\d+)", componente: EditarActores},   

    {path: "/cines", componente: IndiceCines, exact: true},    
    {path: "/cines/crear", componente: CrearCine},    
    {path: "/cines/editar/:id(\\d+)", componente: EditarCine},    
    
    {path: "/peliculas/crear", componente: CrearPelicula},    
    {path: "/peliculas/editar", componente: EditarPelicula},
    {path: "/peliculas/filtrar", componente: FiltroPeliculas},

    {path: "/", componente: LandingPage, exact: true},
    {path: "*", componente: RedireccionarLanding}
]

export default rutas