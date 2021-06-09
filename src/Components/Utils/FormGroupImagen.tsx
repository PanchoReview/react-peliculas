import { useFormikContext } from "formik"
import { ChangeEvent, useState } from "react"

export default function FormGroupImagen(props: formGroupImaegnProps) {
    const [imagenBase64, setImagenBase64] = useState("")
    const [imagenURL, setImagenURL] = useState(props.imagenURL)

    const { values } = useFormikContext<any>()
    const divStyle = {marginTop: "10px"}
    const imageStyle = {width: "450px"}

    const manejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0]
            aBase64(archivo)
                .then((representacionBase64: string) => setImagenBase64(representacionBase64))
                .catch(error => console.error(error))

            values[props.campo] = archivo
            setImagenURL("")
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error)
        })
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={manejarOnChange} />
            </div>
            {imagenBase64 ? 
            <div>
                <div style={divStyle}>
                    <img src={imagenBase64} alt="Imagen seleccionada" style={imageStyle} />
                </div>
            </div> : null
            }
            {imagenURL ? 
            <div>
                <div style={divStyle}>
                    <img src={imagenURL} alt="Imagen seleccionada" style={imageStyle} />
                </div>
            </div> : null
            }
        </div>
    )
}

interface formGroupImaegnProps {
    campo: string
    label: string
    imagenURL: string
}

FormGroupImagen.defaultProps = {
    imagenURL: ""
}