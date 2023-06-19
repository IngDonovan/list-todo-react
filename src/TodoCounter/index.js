import './TodoCounter.css';

function TodoCounter({ total, completed }) {
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
}

  export { TodoCounter };//buena practica, evita que me pueda equivocar -exports nombrados