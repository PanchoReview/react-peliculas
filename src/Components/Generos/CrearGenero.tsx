import { ErrorMessage, Field, Form, Formik } from "formik"
import { useHistory } from "react-router"
import Button from "../Utils/Button"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import FormGroupText from "../Utils/FormGroupText"

export default function CrearGenero() {
    const history = useHistory()

    return (
        <>
            <h3>Crear genero</h3>

            <Formik
                initialValues={{
                    nombre: ""
                }}
                onSubmit={values => { console.log(values) }}
                validationSchema={Yup.object({
                    nombre: Yup.string().required("Este campo es requerido")
                })}
            >
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" placeholder="Ingrese un nombre" />

                    <Button type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            </Formik>
        </>

    )
}