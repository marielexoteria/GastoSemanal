import React, {Component} from 'react';
import {revisarPresupuesto} from '../helper';
import PropTypes from 'prop-types';

class Restante extends Component {
    render() {
        //variables que se pasan de ControlPresupuesto.js
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return (
            //className = {revisarPresupuesto(presupuesto, restante)} para que el CSS cambie de color según si se ha gastado la mitad del presupuesto (de verde a amarillo) o el 75% (de amarillo a rojo)
            <div className = {revisarPresupuesto(presupuesto, restante)}> 
                Restante: ${this.props.restante}
            </div>
        )
    }
}

Restante.propTypes = { //con PropTypes se documenta el tipo de datos que los componentes necesitan. En este caso es que presupuesto y restante son strings
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default Restante;