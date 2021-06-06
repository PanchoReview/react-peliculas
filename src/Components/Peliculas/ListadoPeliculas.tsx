import PeliculaIndividual from "./PeliculaIndividual";
import { Pelicula } from "./Peliculas.model";
import css from "./ListadoPeliculas.module.css"
import Cargando from "../Utils/Cargando";

export default function ListadoPeliculas(props: listadoPeliculasProps) {

    if (!props.peliculas) {
        return <Cargando />
    } else if (props.peliculas.length === 0) {
        return <>No hay elementos para mostrar</>
    } else {
        return (
            <div className={css.div}>
                {props.peliculas.map(pelicula => <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />)}
            </div>
        )
    }


}

interface listadoPeliculasProps {
    peliculas?: Pelicula[]
}

