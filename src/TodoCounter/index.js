import './TodoCounter.css';

function TodoCounter({ total, completed, load  }) {
  
  // return total === completed ? 
  // <h2 className='textCounter'>Felicidades, completaste todas las tareas!!!</h2> 
  // : 
  // <h2>
  // Has completado {completed} de {total} tareas
  // </h2>;
  if (load === true) {
    if (total === 0) {
      return (
        <h2>
          Escribe tu primera tarea
        </h2>
      );
    } else if (total === completed) {
      return (
        <h2 className='textCounter'>Felicidades, completaste todas las tareas!!!</h2>
      );
    } else {
      return (
        <h2>
          Has completado {completed} de {total} tareas
        </h2>
      );
    }
  } else {
    return;
  }
}

  export { TodoCounter };//buena practica, evita que me pueda equivocar -exports nombrados