import React, {useState} from 'react';
import '../style/tarea-formulario.css';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("Enviando formulario...");

    const tareaNueva = {
      id: uuid,
      texto: input,
      completada: false
    }
  }

  const manejarCambio = e =>{
    setInput(e.target.value);

  }

  

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button 
        className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;