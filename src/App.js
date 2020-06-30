import React, { Component, useEffect, useState } from 'react';
import MiComponent from './components/MiComponent';

class App extends Component {
  state = {
    nombre: '',
    foto: '',
    paises: [
      { id: '5r6t7y8u', nombre: 'peru', foto: '5r6t7y8' },
      { id: '8yh8', nombre: 'veracruz', foto: '5r6t7y8' }
    ]
  };
  removeItem = (id) => {
    if (window.confirm(`seguro que quieres borrar ${id}`)) {
      this.setState((prevState) => {
        return {
          paises: prevState.paises.filter((pais) => pais.id !== id)
        };
      });
    }
  };

  editItem = (id, item) => {
    const paisessinItem = this.state.paises.filter((pais) => pais.id !== id);

    this.setState((prevState) => {
      return {
        paises: [...paisessinItem, item]
      };
    });
  };

  handleChange = (evento) => {
    this.setState({ [evento.target.name]: evento.target.value });
  };
  handleSubmit = () => {
    if (this.state.foto !== '' && this.state.nombre !== '') {
      this.setState(({ nombre, foto, paises }) => ({
        nombre: '',
        foto: '',
        paises: [...paises, { id: nombre, nombre, foto }]
      }));
    } else {
      alert('completa los campos');
    }
  };

  render() {
    const { nombre, foto, paises } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.removeItem('ecuador');
          }}
        >
          Borrar
        </button>
        <input name="nombre" value={nombre} onChange={this.handleChange} />
        <input name="foto" value={foto} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Agregar</button>
        <hr />
        {paises.map((pais) => (
          <MiComponent editItem={this.editItem} pais={pais} key={pais.id} removeItem={this.removeItem} />
        ))}
      </>
    );
  }
}

export default App;
