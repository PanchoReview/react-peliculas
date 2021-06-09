import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormGroupText from "../Utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import * as Yup from "yup"
import FormGroupFecha from "../Utils/FormGroupFecha";

export default function FormularioActores(props: formularioActoresProps) {
    return (
        <Formik initialValues={props.modelo} onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required("El nombre es requerido").primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required("Este campo es requerido")

            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupFecha label="Fecha nacimiento" campo="fechaNacimiento" />
                    <Button disabled={formikProps.isSubmitting} type="submit" >Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioActoresProps {
    modelo: actorCreacionDTO
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void
}