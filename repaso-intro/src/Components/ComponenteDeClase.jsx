import {Component} from 'react'

//debo importarlo en <App/>
export default class ComponenteDeClase extends Component {
    render() {
        return (
            <h1>Componente de clase</h1>
        )
    }
}

//debo importarlo en <App/>
export class OtroDeClase extends Component {
    render() {
        return (
            <h1>Otro componente</h1>
        )
    }
}