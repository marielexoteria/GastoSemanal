import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends Component {
    render() {
        return (
            <div className = "alert alert-primary">
                Presupuesto: ${this.props.presupuesto}
            </div>
        )
    }
}

Presupuesto.propTypes = { //con PropTypes se documenta el tipo de datos que los componentes necesitan. En este caso es que presupuesto es un string
    presupuesto: PropTypes.string.isRequired
}

export default Presupuesto;