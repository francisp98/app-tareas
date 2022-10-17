import React, {useState} from "react";
import TareaFormulario from "./tarea-formulario";
import Tarea from "./tarea";
import "../style/lista-tareas.css";

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log("Tarea Agregada");
    console.log(tarea);
  }

  return(
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
      {
        tareas.map((tarea) =>
        <tarea
          texto={tarea.texto}
          completada={tarea.completada} />
        )
      }
    </div>
    </>
  );
}

export default ListaDeTareas;

