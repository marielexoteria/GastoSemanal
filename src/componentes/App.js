import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {
  //creando el state
  state = {
      presupuesto: '',
      restante: '',
      gastos: {}
  }

  componentDidMount() { //este componente se ejecuta cuando la página se carga y aquí pondremos un pop-up que pedirá al usuario que entre un presupuesto mayor que 0 para de ahí hacer los cálculos conforme se vayan agregando los gastos
        this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
        let presupuesto = prompt("¿Cuál es el presupuesto?");
        let resultado = validarPresupuesto(presupuesto);
        if (resultado) {
            this.setState({
                presupuesto: presupuesto,
                restante: presupuesto //porque al inicio no se han agregado gastos. Cuando esto pase, el restante se actualizará
            })
        } else {
            console.log("nope");
            this.obtenerPresupuesto();
        }
  }

  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
      //tomar una copia del state actual usando el spread operator (...)
      const gastos = {...this.state.gastos} 

      //agregar el gasto al objeto del state
      gastos[`gasto${Date.now()}`] = gasto //crea una nueva llave con el gasto y un timestamp correspondiente a la fecha de cuando se hizo click en el botón, para poder agregar el nuevo gasto a la lista anterior

      //restar al presupuesto
      this.restarPresupuesto(gasto.cantidadGasto);

      //poner el nuevo gasto en state
      this.setState({
          gastos //porque la llave y la variable del state (línea 17) se llaman igual y por eso no se pone como gastos: gastos, aunque funcionaría igual
      })
  }

  //restar del presupuesto cuando se cree un gasto
  restarPresupuesto = cantidad => {
      //leer el gasto y convertirlo de string a número
      let restar = Number(cantidad);

      //tomar una copia del state
      let restante = this.state.restante;

      //restante - gasto nuevo
      restante -= restar;
      restante = String(restante); //para evitar que dé un error al haber agregado un PropType de que es un string

      //agregamos el nuevo state con el restante actualizado
      this.setState({
          restante
      })
  }


  render() {
    return (
        <div className = "App container">
            <Header 
                titulo = "Gasto semanal" //título del app
            />

            <div className = "contenido-principal contenido">
                <div className = "row">
                    <div className = "one-half column">
                        <Formulario 
                            agregarGasto = {this.agregarGasto}
                        
                        />
                    </div>

                    <div className = "one-half column">
                        <Listado 
                            gastos = {this.state.gastos}
                        /> 
                        <ControlPresupuesto 
                            presupuesto = {this.state.presupuesto}
                            restante = {this.state.restante}
                        />
                    </div> 
                </div> 
            </div> 
        </div>
    );
  }
}

export default App;
