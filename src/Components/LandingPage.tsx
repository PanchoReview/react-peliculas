import React, { useEffect, useState } from "react"
import ListadoPeliculas from "./Peliculas/ListadoPeliculas"
import { landingPageDTO } from "./Peliculas/Peliculas.model"

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
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
                ],
                proximosEstrenos: [
                    {
                        id: 3,
                        titulo: "Soul",
                        poster: "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
                    }
                ]
            })
        }, 1000)

        return () => clearTimeout(timerId)
    })

    return (
        <>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Próximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}