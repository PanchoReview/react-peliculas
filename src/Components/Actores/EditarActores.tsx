import React from "react";
import FormularioActores from "./FormularioActores";

export default function EditarActores() {
    return (
        <>Editar actores
            <FormularioActores modelo={{ nombre: "Tom Holland", fechaNacimiento: new Date("1994-03-09T:00:00:00") }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}