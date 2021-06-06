import { useEffect, useState } from "react"

export default function EjemploUseEffect() {
    const [clicks, setClicks] = useState(0)
    const [fecha, setFecha] = useState(new Date())

    useEffect(() => {
        console.log("useEffect click")
        document.title = `${clicks} veces`
        return () => {
            //se ejecuta al destruir el componente
            console.log("El componente se va a destruir")
        }
    }, [clicks])

    useEffect(() => {
        console.log("useEffectInterval")
        const intervalId = setInterval(() => {
            setFecha(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [fecha])

useEffect(() => {
    console.log("Voy a ejecutarme una sola vez")
}, [])

    return (
        <>
            <button onClick={() => setClicks(clicks + 1)}>
                Me has clickeado {clicks} veces
            </button>

            <div>
                {fecha.toString()}
            </div>
        </>
    )
}