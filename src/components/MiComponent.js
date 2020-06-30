import React, { useState } from 'react';

const MiComponent = (props) => {
  const [visitado, setVisitado] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [nombre, setNombre] = useState('');

  const HandleSave = () => {
    setIsEditing(false);
    props.editItem(props.pais.id, { id: nombre, nombre, foto: '5r6t7y8' });
  };

  return (
    <div
      style={{
        maxWidth: 400,
        border: `3px solid ${visitado ? 'green' : 'grey'}`,
        padding: 10,
        margin: 10,
        position: 'relative'
      }}
    >
      <button onClick={()=> props.removeItem(props.pais.id)} style={styles.button}>
        X
      </button>

      {!isEditing && <p>Hello, {props.pais.nombre}</p>}

      {isEditing && (
        <input
          name="nombre"
          placeholder={props.pais.nombre}
          value={nombre}
          onChange={({ target }) => {
            setNombre(target.value);
          }}
        />
      )}
      <p>visitado?, {visitado ? 'si' : 'no'}</p>
      <button
        onClick={() => {
          setVisitado(!visitado);
        }}
      >
        Cambiar
      </button>
      <button
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Editar
      </button>

      {isEditing && <button onClick={HandleSave}>Guardar</button>}
    </div>
  );
};

export default MiComponent;

const styles = {
  button: { position: 'absolute', top: 10, right: 10, color: 'red', fontSize: '2rem' }
};
