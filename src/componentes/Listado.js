import React, {Component} from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

class Listado extends Component {
    render() {
        return(
            <div className = "gastos-realizados">
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key => (
                    //se usa Object.keys porque vamos a iterar en el objeto/state/prop gastos y con map se accede a la info del objeto; key sería el identificador único que se le asigna a cada gasto cuando se llena el formulario y se hace click en el botón; el identificador es "gasto" + el timestamp de cuando se hace click en el botón
                    <Gasto 
                        key = {key} //identificador único
                        gasto = {this.props.gastos[key]}
                    />
                    //usando el props gasto con el [key] nos aseguramos de enviar la info del gasto actual y no todo el objeto mientras se itera
                ))}
                
            </div>
        )
    }
}

Listado.propTypes = { //con PropTypes se documenta el tipo de datos que los componentes necesitan. En este caso es que gastos es un objeto (por ser un prop)
    gastos: PropTypes.object.isRequired
}

export default Listado;