import React, { ReactElement } from "react";

export default class ErroBoundary extends React.Component<errorBoundaryProps, errorBoundaryState> {
    constructor(props: errorBoundaryProps) {
        super(props)
        this.state = { hayError: false, mensaje: "" }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo)
    }

    static getDerivedStateFromError(error: any) {
        return { hayError: true, mensaje: error }
    }

    render() {
        if (this.state.hayError) {
            if (this.props.errorUI) {
                return this.props.errorUI
            } else {
                return <h3>{this.state.mensaje}</h3>
            }
        }

        return this.props.children
    }
}

interface errorBoundaryState {
    hayError: boolean
    mensaje: string
}

interface errorBoundaryProps {
    errorUI?: ReactElement
}
