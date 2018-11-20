import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render() {
        const {nombreGasto, cantidadGasto} = this.props.gasto; //declarando las variables para desplegar el listado de gastos, usando destructuring; este prop se envía desde Listado.js
        return(
            <li className = "gastos">
                <p>
                    {nombreGasto}
                    <span className = "gasto">${cantidadGasto}</span>
                </p>
            </li>
        )
    }
}

Gasto.propTypes = { //con PropTypes se documenta el tipo de datos que los componentes necesitan. En este caso es que gasto es un objeto
    gasto: PropTypes.object.isRequired
}

export default Gasto;