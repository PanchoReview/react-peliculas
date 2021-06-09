import React from "react";
import FormularioActores from "./FormularioActores";

export default function EditarActores() {
    return (
        <>Editar actores
            <FormularioActores modelo={{ 
                nombre: "Tom Holland", 
                fechaNacimiento: new Date("1994-03-09T00:00:00"),
                fotoURL: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg",
                biografia: "# Tom Holland es un **actor**"
                
            }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}