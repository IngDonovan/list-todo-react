import './TodoCounter.css';

function TodoCounter ({total,completed}) {
    return(
      <h2 >
        Has completado {completed} de {total} Tareas
      </h2>
    );
  }

  export { TodoCounter };//buena practica, evita que me pueda equivocar -exports nombrados