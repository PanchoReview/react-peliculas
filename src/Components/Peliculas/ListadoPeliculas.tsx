import PeliculaIndividual from "./PeliculaIndividual";
import { Pelicula } from "./Peliculas.model";
import css from "./ListadoPeliculas.module.css"

export default function ListadoPeliculas(props: listadoPeliculasProps) {
    return (
        <div className={css.div}>
            {props.peliculas.map(pelicula => <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />)}
        </div>
    )
}

interface listadoPeliculasProps {
    peliculas: Pelicula[]
}

