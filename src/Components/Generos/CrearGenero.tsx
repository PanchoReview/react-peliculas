import FormularioGeneros from "./FormularioGeneros"

export default function CrearGenero() {
    // const history = useHistory()

    return (
        <>
            <h3>Crear genero</h3>

            <FormularioGeneros modelo={{nombre: ""}} onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 300))
                console.log(valores)
            }}/>
        </>

    )
}