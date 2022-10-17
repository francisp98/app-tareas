import './App.css';
import logo from './img/Olimi.svg';
import ListaDeTareas from './component/lista-tareas';

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
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
