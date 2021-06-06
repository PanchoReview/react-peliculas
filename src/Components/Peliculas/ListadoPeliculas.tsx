import PeliculaIndividual from "./PeliculaIndividual";
import { Pelicula } from "./Peliculas.model";
import css from "./ListadoPeliculas.module.css"
import ListadoGenerico from "../Utils/ListadoGenerico";

export default function ListadoPeliculas(props: listadoPeliculasProps) {

    return (
        <ListadoGenerico listado={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map(pelicula => <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />)}
            </div>
        </ListadoGenerico>
    )
}

interface listadoPeliculasProps {
    peliculas?: Pelicula[]
}

