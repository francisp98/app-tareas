import './App.css';
import logo from './img/Olimi.svg';
import TareaFormulario from './component/tarea-formulario';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='olimi-logo-contenedor'>
        <img
        src={logo}
        className='olimi-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
