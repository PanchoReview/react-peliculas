import IndiceGeneros from "./Components/Generos/IndiceGeneros"
import LandingPage from "./Components/LandingPage"

const rutas = [
    {path: "/", componente: LandingPage, exact: true},
    {path: "/generos", componente: IndiceGeneros},    
]

export default rutas