export default function EjemploCSS() {
    const subtitulo = "Este es un subtitulo"
    const valueToDuplicate = 3;
    const duplicar = (valor: number) => valor * 2;
    const imageUrl = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg"
    return (
        <div>
            <h1 className="rojo">Hola mundo</h1>
            <div className="cuadrado-rojo"></div>

            <h3>{subtitulo}</h3>
            <h4>El doble de {valueToDuplicate} es {duplicar(valueToDuplicate)}</h4>
            <img src={imageUrl} alt="logo react" />
            <div>
                <input type="checkbox" checked={true} /> Este es un checkbox
      </div>
        </div>
    )
}