import { useParams } from "react-router"

export default function EditarGenero() {
    const { id }: any = useParams()

    return (
        <>
            Editar genero
            El id es {id}
        </>
    )
}