import { NavLink } from "react-router-dom";

export default function Menu() {
    const claseActive = "active"

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={claseActive} to="/">React peliculas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActive} to="/generos">Géneros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActive} to="/peliculas/filtrar">Filtrar peliculas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActive} to="/actores">Actores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActive} to="/cines">Cines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActive} to="/peliculas/crear">Crear pelicula</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}