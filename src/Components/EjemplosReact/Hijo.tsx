import { useContext } from 'react'
import ValorContext from './ValorContext'

export default function Hijo() {
    const valorContext = useContext(ValorContext)

    return(
        <>
            <h3>Componente hijo: El valor del context es: {valorContext}</h3>
        </>
    )
}