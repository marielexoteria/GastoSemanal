import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FormularioGasto extends Component {
    //refs para los campos del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {
        //prevenir el event default
        e.preventDefault();

        //crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }

        //console.log(gasto);

        //agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);

        //resetear el formulario (opcional)
        e.currentTarget.reset();


    }


    render() {
        return(
            //onSubmit = action en HTML; this.crearGasto sería crearGasto.php, siguiendo esa analogía
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" ref={this.nombreGastoRef} type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" ref={this.cantidadGastoRef} type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

FormularioGasto.propTypes = { //con PropTypes se documenta el tipo de datos que los componentes necesitan. En este caso es que agregarGasto es una función
    agregarGasto: PropTypes.func.isRequired
}

export default FormularioGasto;