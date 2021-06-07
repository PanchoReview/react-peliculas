import React from "react"
import { useParams } from "react-router"
import FormularioGeneros from "./FormularioGeneros"

export default function EditarGenero() {
    const { id }: any = useParams()

    return (
        <>
            <h3>Crear genero</h3>

            <FormularioGeneros modelo={{ nombre: "Action" }} onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 300))
                console.log(valores)
            }} />
        </>
    )
}